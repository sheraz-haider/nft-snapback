// import React from 'react';
// import Header from '../components/header/Header';
// import InnerFooter from '../components/InnerFooter/InnerFooter';
// import { useState, useEffect, useRef } from 'react'
// import { ethers } from 'ethers'
// import { create as ipfsHttpClient } from 'ipfs-http-client'
// import { useRouter } from 'next/router'
// import Web3Modal from 'web3modal'
// import {
//   nftaddress, //nftmarketaddress
// } from '../config'
// import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
// // import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'


// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

// // https://ipfs.io/ipfs/QmVz2u4dVMB8YmXy9vRxkfah1nzaFDKSWBnzXKPKRevwRz?filename=1.json
// // https://ipfs.io/ipfs/QmcvFeDMMrgqQTqWTJUYuFZCkcjKbyu9VhGaJtNW2UtCN6?filename=2.json


// //0 https://bafybeig7s5erwkelsbnoxedccbckh3vgehjuuoib2lbargxzbapr6cly6y.ipfs.infura-ipfs.io/
// //1 https://bafybeidde2axcvwavekzrvhrjsfrb2kl6slh6xizmr3qutmceftw75cr4m.ipfs.infura-ipfs.io/
// //2 https://bafybeif6ekosavkgz47ug57tkdcgvnpovrhx7o35bu4orjjqgsqieaklti.ipfs.infura-ipfs.io/
// //3 https://bafybeicfsombbug5duyxvwjjgxtk67jqlhfuziusibwy5ugvlshcsr26fi.ipfs.infura-ipfs.io/

// //0 https://bafybeifdq7dsqe4zmzprddkrtzyjx456h46wgjwhysntvm3kv2h3slyr3u.ipfs.infura-ipfs.io/
// //1 https://bafybeihwvuaz2es7yatd5ozblviptnu6x7n6rv465qbqewpmoxeha7wvcy.ipfs.infura-ipfs.io/
// //2 https://bafybeifrfrf6roheuoyjno7ylu235t7df23x2yhhhx2atmkk5h2l2s7xtu.ipfs.infura-ipfs.io/
// //3 https://bafybeihrlxlcreoaaeqi542553gk3kpj567yq3fyrdfgizknp2um4rlwka.ipfs.infura-ipfs.io/


// //0 https://bafybeiaaav5f3q7tshx5vwe5pf7ohhdlo6uptpjcbt556c7cw5rd2uagkm.ipfs.infura-ipfs.io/
// //1 https://bafybeibae5mmqj2j63tyjqbn3dpwrx34og6mccngo4cwvm2swxeyrvkdre.ipfs.infura-ipfs.io/
// //2 https://bafybeiblyf2qulzjjtcskgpb7mfxshw2bruyuzrm7gcp36nfb53hpiwpja.ipfs.infura-ipfs.io/
// //3 https://bafybeibbezcrdcdxmzm37xvthumpai5hwikuk6agppskzrgd4c7qpikvgu.ipfs.infura-ipfs.io/

// const UploadNfts = () => {
//   const [address, setAddress] = useState(null)
//   const [fileUrl, setFileUrl] = useState(null)
//   const [wait, setWait] = useState(null)
//   const [formInput, updateFormInput] = useState({ collectionId: 1, seriesId: 1 })
//   const [file, setFile] = useState("");
//   const router = useRouter()
//   const uploadButton = useRef(null)

//   const addMetadata = async () => {
//     try {
//       const added = await client.add(
//         { path: `${1}.json`, content: `{ "id": 1, "name": "Some Name", "description": "Some desc...", "image": "ipfs://image.link/" }`},
//         {
//           progress: (prog) => console.log(`received: ${prog}`),
//           wrapWithDirectory: true,
//           cidVersion: 1,
//           hashAlg: 'sha2-256'
//         }
//       )
//       console.log(added);
//       const url = `https://ipfs.infura.io/ipfs/QmVz2u4dVMB8YmXy9vRxkfah1nzaFDKSWBnzXKPKRevwRz?filename=1.json${added.path}`
//       console.log(url);
//       // setFileUrl(url)
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }
//   }

//   useEffect(() => {
//     if(!address)
//       loadConnectedProfile()

//     addMetadata()
//   }, [address])

//   async function loadConnectedProfile() {
//     const web3Modal = new Web3Modal()
//     const connection = await web3Modal.connect()
//     const provider = new ethers.providers.Web3Provider(connection)
//     const _address = await provider.getSigner().getAddress()
//     const _bal = await provider.getSigner().getBalance()
//     // const _artist = await axios({
//     //   method: 'get',
//     //   url: `/api/v1/artists`,
//     //   params: { address: _address },
//     // })
//     // if(_artist.data.length) {
//     //   setProfile(_artist.data[0])
//     //   setAddress(_address)
//     // }
//     // else {
//     //   router.push('/register')
//     // }
//     setAddress(_address)
//     console.log(address);
//   }


//   async function onChange(e) {
//     const file = e.target.files[0]
//     console.log(file);
//     try {
//       const added = await client.add(
//         file,
//         {
//           progress: (prog) => console.log(`received: ${prog}`),
//           // wrapWithDirectory: true
//         }
//       )
//       console.log(added);
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       console.log(url);
//       setFileUrl(url)
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }
//   }

//   async function createMarket() {
//     setWait('Uploading asset...')
//     const { collectionId, seriesId } = formInput
//     if (!collectionId || !seriesId || !fileUrl) return
//     /* first, upload to IPFS */
//     const data = JSON.stringify({
//       collectionId, seriesId, image: fileUrl
//     })
//     try {
//       const added = await client.add(data).catch(console.log)
//       const url = `https://ipfs.infura.io/ipfs/${added.path}`
//       /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
//       createSale(collectionId, seriesId, url)
//     } catch (error) {
//       console.log('Error uploading file: ', error)
//     }
//   }

//   async function createSale(collectionId, seriesId, url) {
//     // setWait('Minting asset...')
//     // const web3Modal = new Web3Modal()
//     // const connection = await web3Modal.connect()
//     // const provider = new ethers.providers.Web3Provider(connection)
//     // const signer = provider.getSigner()

//     // /* next, create the item */
//     // let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
//     // let transaction = await contract.createToken(url)
//     // let tx = await transaction.wait()
//     // let event = tx.events[0]
//     // let value = event.args[2]
//     // let tokenId = value.toNumber()
//     // // const price = ethers.utils.parseUnits(formInput.price, 'ether')

//     // /* then list the item for sale on the marketplace */
//     // contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
//     // // let listingPrice = await contract.getListingPrice()
//     // // listingPrice = listingPrice.toString()

//     // setWait('Listing asset...')
//     // transaction = await contract.createMarketItem(nftaddress, tokenId, collectionId, seriesId)
//     // let tx2 = await transaction.wait()
//     // console.log(tx2.events);
//     // // let event2 = tx2.events[2]
//     // // let value2 = event2.args[0]
//     // // let itemId = value2.toNumber()

//     // // const nft = await axios({
//     // //   method: 'post',
//     // //   url: `/api/v1/nfts`,
//     // //   data: {
//     // //     tokenUri: url,
//     // //     itemId: itemId,
//     // //     ipfsPath: fileUrl,
//     // //     title: formInput.name,
//     // //     artist: profile._id,
//     // //     owner: profile._id,
//     // //     col: formInput.col,
//     // //     price: formInput.price,
//     // //     description: formInput.description
//     // //   },
//     // // })
//     // // if(nft.data) {
//     // //   // console.log(nft.data);
//     // //   window.location.replace('/market')
//     // //   return;
//     // // }
//     // localStorage.setItem("____ttl", Number(localStorage.getItem("____ttl")) + 1)
//     // window.location.replace('/collected-nfts')

//     // router.push('/')
//   }

//   return (
//     <>
//       <Header />
//       <div className='inner_hero'>
//         <div className='wraper'>
//           <h1>Upload NFTs</h1>
//           <p>
//             Lorem ipsum dolor sit amet,
//             <br /> consectetur adipiscing elit.
//           </p>
//         </div>
//       </div>
//       <div className='upload_nfts'>
//         {wait !== null ? (
//           <h4 style={{lineHeight: '200px', fontSize: '100px', textAlign: 'center', margin: '100px', display: 'block', opacity: '0.3', color: "#fff"}}>{wait}</h4>
//         ) : (
//           <div className='wrapper'>
//             <div className='upload_nfts_outer'>
//               <div className='upload_nfts_form_field'>
//                 <label>Collection</label>
//                 <select defaultValue={1} onChange={e => updateFormInput({ ...formInput, collectionId: e.target.value })}>
//                   <option value={1}>Avastars</option>
//                   <option value={2}>Drippers</option>
//                   <option value={3}>Unoffical Punks</option>
//                   <option value={4}>Cocain Cowboy</option>
//                 </select>
//               </div>
//               <div className='upload_nfts_form_field'>
//                 <label>Series</label>
//                 <select defaultValue={1} onChange={e => updateFormInput({ ...formInput, seriesId: e.target.value })}>
//                   <option value={1}>Series 1</option>
//                 </select>
//               </div>
//               <div className='upload_nfts_form_upload'>
//                 <div className='upload_nfts_form_field'>
//                   <label>Upload Image/video:</label>
//                   <input type='text' onClick={() => uploadButton.current?.click()} readOnly value={fileUrl} />
//                 </div>
//                 <div className='upload_nfts_form_field custom_upload' style={{ display: 'none' }}>
//                   <label>
//                     Upload
//                     <input
//                       ref={uploadButton}
//                       onChange={onChange}
//                       type='file'
//                       accept='image/png, image/gif, image/jpeg, video/x-flv, video/mp4, application/x-mpegURL, video/MP2T, video/3gpp, video/quicktime, video/x-msvideo, video/x-ms-wmv, application/json'
//                     />
//                   </label>
//                 </div>
//               </div>
//               {fileUrl && uploadButton.current && uploadButton.current.files.length && (
//                 <div className='upload_nfts_upload_preview' style={{ display: 'block'}}>
//                   <h3>Preview</h3>
//                   <img src={URL.createObjectURL(uploadButton.current.files[0])} style={{ maxHeight: "200px"}} />
//                 </div>
//               )}
//               <div className='upload_nfts_form_btn'>
//                 <input type='submit' onClick={createMarket} value='Continue' />
//               </div>
//             </div>
//           </div>
//         )}

//       </div>
//       <InnerFooter />
//     </>
//   );
// };

// export default UploadNfts;
