import React from 'react';
import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import { useState, useEffect, useRef } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import {
  nftaddress,
} from '../config'
import NFTsnapback from '../artifacts/contracts/NFTsnapback.sol/NFTsnapback.json'
import { generateVideoThumbnails } from '@rajesh896/video-thumbnails-generator';
import axios from 'axios';


const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const UploadNfts = () => {
  const [address, setAddress] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  const [wait, setWait] = useState(null)
  const [formInput, updateFormInput] = useState({ name: "", description: "", cap: 50 })
  const [file, setFile] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const router = useRouter()
  const uploadButton = useRef(null)

  useEffect(() => {
    if(!address)
      loadConnectedProfile()
  }, [address])

  async function loadConnectedProfile() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const _address = await provider.getSigner().getAddress()
    const _bal = await provider.getSigner().getBalance()
    // const _artist = await axios({
    //   method: 'get',
    //   url: `/api/v1/artists`,
    //   params: { address: _address },
    // })
    // if(_artist.data.length) {
    //   setProfile(_artist.data[0])
    //   setAddress(_address)
    // }
    // else {
    //   router.push('/register')
    // }
    setAddress(_address)
    console.log(address);
  }

  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }


  async function onChange(e) {
    const file = e.target.files[0]
    // console.log(file);
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`),
          // wrapWithDirectory: true
        }
      )
      // console.log(added);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      // console.log(url);
      setFileUrl(url)

      let thumbnailArray = await generateVideoThumbnails(file, 1).catch((err) => {
        console.error(err);
      });
      // console.log(thumbnailArray);

      const thumbAdded = await client.add(
        dataURLtoFile(thumbnailArray[0], "thumbnail.png"),
        {
          progress: (prog) => console.log(`received: ${prog}`),
          // wrapWithDirectory: true
        }
      )
      // console.log(thumbAdded);
      const thumbUrl = `https://ipfs.infura.io/ipfs/${thumbAdded.path}`
      // console.log(thumbUrl);
      setThumbnail(thumbUrl);
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function uploadToken() {
    setWait('Uploading asset...')
    const { name, description, cap } = formInput
    if (!name || !description || !cap || !fileUrl) {
      setWait(null);
      return;
    }

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    try {
      /* next, create the item */
      let contract = new ethers.Contract(nftaddress, NFTsnapback.abi, signer);
      let newTokenId = await contract.getLatestTokenId();
      newTokenId = newTokenId === "" ? 0 : (Number(newTokenId) || -1) + 1;

      console.log(newTokenId);

      /* first, upload to IPFS */
      const data = JSON.stringify({
        id: newTokenId, name, description, image: thumbnail, video: fileUrl
      })
      try {
        const added = await client.add(data).catch(console.log)
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
        /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
        createToken(data, url, cap)
      } catch (error) {
        console.log('Error uploading file: ', error)
      }
    } catch (error) {
      console.log('Error connection: ', error)
    }

  }

  async function createToken(data, url, cap) {
    setWait('Creating token...')
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    try {
      /* next, create the item */
      let contract = new ethers.Contract(nftaddress, NFTsnapback.abi, signer);
      let transaction = await contract.createToken(url, Number(cap));
      let _d = await transaction.wait();
      console.log(_d);

      const token = await axios({
        method: 'post',
        url: `/api/v1/token`,
        data: {
          ...JSON.parse(data),
          // id: newTokenId,
        },
      });
      if (token.data) {
        // console.log(nft.data);
        setWait('Done! please refresh')
        // router.push('/collected-nfts');
        return;
      }

      console.log(newTokenId);
    } catch (error) {
      console.log('Error connection: ', error)
    }

    // /* next, create the item */
    // let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    // let transaction = await contract.createToken(url)
    // let tx = await transaction.wait()
    // let event = tx.events[0]
    // let value = event.args[2]
    // let tokenId = value.toNumber()
    // // const price = ethers.utils.parseUnits(formInput.price, 'ether')

    // /* then list the item for sale on the marketplace */
    // contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    // // let listingPrice = await contract.getListingPrice()
    // // listingPrice = listingPrice.toString()

    // setWait('Listing asset...')
    // transaction = await contract.createMarketItem(nftaddress, tokenId, collectionId, seriesId)
    // let tx2 = await transaction.wait()
    // console.log(tx2.events);
    // // let event2 = tx2.events[2]
    // // let value2 = event2.args[0]
    // // let itemId = value2.toNumber()

    // // const nft = await axios({
    // //   method: 'post',
    // //   url: `/api/v1/nfts`,
    // //   data: {
    // //     tokenUri: url,
    // //     itemId: itemId,
    // //     ipfsPath: fileUrl,
    // //     title: formInput.name,
    // //     artist: profile._id,
    // //     owner: profile._id,
    // //     col: formInput.col,
    // //     price: formInput.price,
    // //     description: formInput.description
    // //   },
    // // })
    // // if(nft.data) {
    // //   // console.log(nft.data);
    // //   window.location.replace('/market')
    // //   return;
    // // }
    // localStorage.setItem("____ttl", Number(localStorage.getItem("____ttl")) + 1)
    // window.location.replace('/collected-nfts')

    // router.push('/')
  }

  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1>Upload NFTs</h1>
        </div>
      </div>
      <div className='upload_nfts'>
        {wait !== null ? (
          <h4 style={{lineHeight: '200px', fontSize: '100px', textAlign: 'center', margin: '100px', display: 'block', opacity: '0.3', color: "#fff"}}>{wait}</h4>
        ) : (
          <div className='wrapper'>
            <div className='upload_nfts_outer'>
              <div className='upload_nfts_form_field'>
                <label>Name</label>
                <input type="text" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} />
              </div>
              <div className='upload_nfts_form_field'>
                <label>Description</label>
                <textarea onChange={e => updateFormInput({ ...formInput, description: e.target.value })} />
              </div>
              <div className='upload_nfts_form_field'>
                <label>Minting Cap</label>
                <input type="number" onChange={e => updateFormInput({ ...formInput, cap: e.target.value })} />
              </div>
              <div className='upload_nfts_form_upload'>
                <div className='upload_nfts_form_field'>
                  <label>Upload Video:</label>
                  <input type='text' onClick={() => uploadButton.current?.click()} readOnly value={fileUrl} />
                </div>
                <div className='upload_nfts_form_field custom_upload' style={{ display: 'none' }}>
                  <label>
                    Upload
                    <input
                      ref={uploadButton}
                      onChange={onChange}
                      type='file'
                      accept='video/x-flv, video/mp4, application/x-mpegURL, video/MP2T, video/3gpp, video/quicktime, video/x-msvideo, video/x-ms-wmv'
                    />
                  </label>
                </div>
              </div>
              {fileUrl && uploadButton.current && uploadButton.current.files.length && (
                <div className='upload_nfts_upload_preview' style={{ display: 'block'}}>
                  <h3>Preview</h3>
                  <video controls={false} autoPlay={true} loop={true} muted={true} style={{ maxHeight: "200px", borderRadius: "20px"}}>
                    <source
                      src={URL.createObjectURL(uploadButton.current.files[0])}
                      type='video/mp4'
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <div className='upload_nfts_form_btn'>
                <input type='submit' disabled={!formInput.name || !formInput.description || !fileUrl} onClick={uploadToken} value='Continue' />
              </div>
            </div>
          </div>
        )}

      </div>
      <InnerFooter />
    </>
  );
};

export default UploadNfts;



// export default () => {
//   return (<></>)
// }
