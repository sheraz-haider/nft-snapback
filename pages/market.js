import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import Link from 'next/link'
import axios from 'axios'

import {
  nftaddress, nftmarketaddress
} from '../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'

export default function Home() {
  const [address, setAddress] = useState(null)
  const [profile, setProfile] = useState(null)
  const router = useRouter()

  const [nfts, setNfts] = useState([])
  const [buying, setBuying] = useState(false)

  useEffect(() => {
    if(!address)
      loadConnectedProfile()
    else {
      loadNFTs()
    }
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

  async function loadNFTs() {
    const _nfts = await axios({
      method: 'get',
      url: `/api/v1/nfts`,
      // params: { address: _address },
    })
    if(_nfts.data.length) {
      console.log(_nfts.data);
      setNfts(_nfts.data)
    }

    // try {
    //   const web3Modal = new Web3Modal()
    //   const connection = await web3Modal.connect()
    //   const provider = new ethers.providers.Web3Provider(connection)
    //   const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
    //   const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, provider)
    //   const data = await marketContract.fetchMarketItems()

    //   const items = await Promise.all(data.map(async i => {
    //     const tokenUri = await tokenContract.tokenURI(i.tokenId)
    //     const meta = await axios.get(tokenUri)
    //     let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
    //     let item = {
    //       price,
    //       tokenId: i.tokenId.toNumber(),
    //       itemId: i.itemId.toNumber(),
    //       seller: i.seller,
    //       owner: i.owner,
    //       image: meta.data.image,
    //       name: meta.data.name,
    //       description: meta.data.description,
    //     }
    //     return item
    //   }))
    //   console.log(items);
    //   setNfts(items)
    //   setLoadingState('loaded')
    // } catch (error) {
    //   console.log(error);
    // }

  }

  async function buyNft(nft) {
    setBuying(true)
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nftaddress, nft.itemId, {
      value: price
    })
    await transaction.wait()

    const _buyCall = await axios({
      method: 'post',
      url: `/api/v1/nfts/${nft._id}/buy`,
      data: {
        from: nft.owner._id,
        to: profile._id
      },
    })
    if(_buyCall.data) {
      console.log(_buyCall.data);
    }
    setBuying(false)
    loadNFTs()
  }


  return buying ? (
    <h4 style={{lineHeight: '200px', fontSize: '100px', textAlign: 'center', margin: '100px', display: 'block', opacity: '0.3'}}>Buying...</h4>
  ) : (
    <div className="">

      <div className="hero_marketplace bg_white">
        <div className="container">
          <h1 className="text-center">NFT Marketplace</h1>
        </div>
      </div>
      <div className="bg_white border-b py-20">
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul className="menu_categories space-x-20">
              <li>
                <a href="#" className="color_brand">
                  <span> All </span>
                </a>
              </li>
              <li> <a href="#">
                  <i className="ri-gamepad-line" /> <span> Games </span>
                </a>
              </li>
              <li> <a href="#">
                  <i className="ri-brush-line" /> <span> Art </span>
                </a>
              </li>
              <li> <a href="#">
                  <i className="ri-stock-line" /> <span> Trading Cards </span>
                </a>
              </li>
              <li> <a href="#">
                  <i className="ri-emotion-laugh-line" /> <span> Memes </span>
                </a>
              </li>
              <li> <a href="#">
                  <i className="ri-layout-4-line" /> <span> Collectibles </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section mt-100">
          <div className="section__head">
            <h2 className="section__title mb-20"> Artworks</h2>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-auto">
                <div className="d-flex align-items-center">
                  <span className="color_text txt_sm d-none d-sm-block mr-10" style={{minWidth: 'max-content'}}>
                    FILTER BY:
                  </span>
                  <ul className="menu_categories">

                    <li className="d-flex switch_item">
                      <input type="checkbox" id="switch4" /><label htmlFor="switch4">Toggle</label>
                      <span className="ml-10"> Has sold </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-auto">
                <div className="d-flex space-x-10 align-items-center sm:mt-20">
                  <span className="color_text txt_sm"> SORT BY: </span>
                  <div className="dropdown">
                    <button className="btn btn-dark btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Recent Active
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else
                        here</a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="row mb-30_reset">

            {nfts.map(nft => (
              <div key={nft._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="card__item four">
                  <div className="card_body space-y-10">
                    <div className="creators space-x-10">
                      <div className="avatars space-x-3"><a href="Profile.html"><img src="/assets/img/avatars/avatar_1.png" alt="Avatar" className="avatar avatar-sm" /></a><a href="Profile.html">
                          <p className="avatars_name txt_xs">{nft.owner.name}</p>
                        </a></div>
                    </div>
                    <div className="card_head"><a href="Item-details.html"><img src={nft.ipfsPath} alt="item img" /></a>
                    </div>
                    <h6 className="card_title" style={{textAlign: 'center'}}><a className="color_black" href="Item-details.html">{nft.title}</a></h6>
                    <div className="card_footer d-block space-y-10" style={{marginTop: 0}}>
                      <div className="card_footer justify-content-between">
                        <a href="#" style={{textAlign: 'center', margin: 'auto'}}>
                          <p className="txt_sm">Price: <span className="color_green txt_sm">{nft.price} ETH</span></p>
                        </a>
                      </div>
                      {nft.sold ? (
                        <div className="d-flex align-items-center space-x-10 "><button className="btn btn-sm btn-dark" style={{fontStyle: 'italic', margin: 'auto'}}>Sold</button></div>
                      ) : (
                        <div className="d-flex align-items-center space-x-10 "><button className="btn btn-sm btn-primary" onClick={() => buyNft(nft)} style={{margin: 'auto'}}>Buy</button></div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>


      {/* <div className="px-4" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {
            nfts.map((nft, i) => (
              <div key={i} className="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} />
                <div className="p-4">
                  <p style={{ height: '64px' }} className="text-2xl font-semibold">{nft.name}</p>
                  <div style={{ height: '70px', overflow: 'hidden' }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-black">
                  <p className="text-2xl mb-4 font-bold text-white">{nft.price} ETH</p>
                  <button className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => buyNft(nft)}>Buy</button>
                </div>
              </div>
            ))
          }
        </div>
      </div> */}
    </div>
  )
}