import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import Link from 'next/link'
import axios from 'axios'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

export default function CreateItem() {
  const [address, setAddress] = useState(null)
  const [profile, setProfile] = useState(null)
  const [fileUrl, setFileUrl] = useState(null)
  const [wait, setWait] = useState(null)
  const [formInput, updateFormInput] = useState({ price: "0.03", name: '', description: '', col: 'Games' })
  const router = useRouter()

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
    const _artist = await axios({
      method: 'get',
      url: `/api/v1/artists`,
      params: { address: _address },
    })
    if(_artist.data.length) {
      setProfile(_artist.data[0])
      setAddress(_address)
    }
    else {
      router.push('/register')
    }
    console.log(address, _artist.data);
  }


  async function onChange(e) {
    const file = e.target.files[0]
    try {
      const added = await client.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      setFileUrl(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }
  async function createMarket() {
    setWait('Uploading asset...')
    const { name, description, price } = formInput
    if (!name || !description || !price || !fileUrl) return
    /* first, upload to IPFS */
    const data = JSON.stringify({
      name, description, image: fileUrl
    })
    try {
      const added = await client.add(data).catch(console.log)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      createSale(url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

  async function createSale(url) {
    setWait('Minting asset...')
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
    let transaction = await contract.createToken(url)
    let tx = await transaction.wait()
    let event = tx.events[0]
    let value = event.args[2]
    let tokenId = value.toNumber()
    const price = ethers.utils.parseUnits(formInput.price, 'ether')

    /* then list the item for sale on the marketplace */
    contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
    let listingPrice = await contract.getListingPrice()
    listingPrice = listingPrice.toString()

    setWait('Listing asset...')
    transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
    let tx2 = await transaction.wait()
    let event2 = tx2.events[2]
    let value2 = event2.args[0]
    let itemId = value2.toNumber()

    const nft = await axios({
      method: 'post',
      url: `/api/v1/nfts`,
      data: {
        tokenUri: url,
        itemId: itemId,
        ipfsPath: fileUrl,
        title: formInput.name,
        artist: profile._id,
        owner: profile._id,
        col: formInput.col,
        price: formInput.price,
        description: formInput.description
      },
    })
    if(nft.data) {
      // console.log(nft.data);
      window.location.replace('/market')
      return;
    }

    // router.push('/')
  }

  return wait !== null ? (
    <h4 style={{lineHeight: '200px', fontSize: '100px', textAlign: 'center', margin: '100px', display: 'block', opacity: '0.3'}}>{wait}</h4>
  ) : (
    <div className="">
      {profile && (
        <>
          <div className="hero__upload">
            <div className="container">
              <div className="space-y-20">
                <h2 className="title">Create NFT</h2>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box in__upload mb-120">
              <div className="row">
                <div className="col-lg-6">
                  <div className="left__part space-y-40 md:mb-20 upload_file">
                    <div className="space-y-20">
                    {
                      fileUrl ? (
                        <img className="rounded mt-4" width="100" src={fileUrl} />
                      ) : (
                        <img className="icon" src="assets/img/icons/upload.svg" alt="" />
                      )
                    }
                      <h5>Drag and drop your file</h5>
                      <p className="color_text">PNG, GIF, WEBP, MP4 or MP3. Max
                        100mb.</p>
                    </div>
                    <div className="space-y-20">
                      <p className="color_text">or choose a file</p>
                      <a href="#" className="btn btn-white"> Browse files </a>
                      <input type="file" onChange={onChange} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group space-y-10">
                    <div className="space-y-20">
                      <div className="space-y-10">
                        <span className="nameInput">Title</span>
                        <input type="text" onChange={e => updateFormInput({ ...formInput, name: e.target.value })} className="form-control" placeholder="e. g. `raroin design art`" />
                      </div>
                      <div className="space-y-10">
                        <span className="nameInput">Description <span className="color_text">
                            (optional) </span></span>
                        <input type="text" onChange={e => updateFormInput({ ...formInput, description: e.target.value })} className="form-control" placeholder="e. g. `raroin design art`" />
                      </div>
                      <div className="space-y-10">
                        <span className="variationInput">Price</span>
                        <input type="number" min={0.03} defaultValue={0.03} onChange={e => updateFormInput({ ...formInput, price: e.target.value })} className="form-control" placeholder="" />
                      </div>
                      <div className="space-y-10">
                        <span className="variationInput">Collection</span>
                        <select className="form-select custom-select" onChange={e => updateFormInput({ ...formInput, col: e.target.value })} aria-label="Default select example">
                          <option>Games</option>
                          <option>Art</option>
                          <option>Trading Cards</option>
                          <option>Memes</option>
                          <option>Collectibles</option>
                        </select>
                      </div>

                    </div>
                  </div>
                  <p className="color_black">
                    <span className="color_text text-bold"> Service fee : </span>
                    {'0.025'}
                  </p>
                  {/* <p className="color_black">
                    <span className="color_text text-bold"> You will receive :
                    </span>
                    22.425 ETH $41,637.78
                  </p> */}
                  <p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed_row bottom-0 left-0 right-0">
            <div className="container">
              <div className="row content justify-content-between mb-20_reset">
                <div className="col-md-auto col-12 mb-20">
                  <div className="space-x-10">
                    <Link href="/">
                      <a className="btn btn-white others_btn"> Cancel</a>
                    </Link>
                  </div>
                </div>
                <div className="col-md-auto col-12 mb-20">
                  <button onClick={createMarket} className="btn btn-grad btn_create"> Create NFT</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}




      {/* <div className="w-1/2 flex flex-col pb-12">
        <input
          placeholder="Asset Name"
          className="mt-8 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, name: e.target.value })}
        />
        <textarea
          placeholder="Asset Description"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, description: e.target.value })}
        />
        <input
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          onChange={e => updateFormInput({ ...formInput, price: e.target.value })}
        />
        <input
          type="file"
          name="Asset"
          className="my-4"
          onChange={onChange}
        />
        {
          fileUrl && (
            <img className="rounded mt-4" width="350" src={fileUrl} />
          )
        }
        <button onClick={createMarket} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Create Digital Asset
        </button>
      </div> */}
    </div>
  )
}