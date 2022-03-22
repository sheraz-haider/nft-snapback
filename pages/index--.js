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
  const [buying, setBuying] = useState(false)

  const [nfts, setNfts] = useState([])
  const [artists, setArtists] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  useEffect(() => {
    if(!address)
      loadConnectedProfile()
    else {
      loadNFTs()
      loadArtists()
    }
  }, [address])

  async function loadArtists() {
    const _artists = await axios.get('/api/v1/artists')
    setArtists(_artists.data)
    // setLoadingState('loaded')
    document.getElementById('swiper-bundle-script').src += '?t=1'
  }

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

  // if (loadingState === 'loaded' && !nfts.length) return (<h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>)
  return buying ? (
    <h4 style={{lineHeight: '200px', fontSize: '100px', textAlign: 'center', margin: '100px', display: 'block', opacity: '0.3'}}>Buying...</h4>
  ) : (
    <div className="">
      <div className="hero__1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero__left space-y-20">
                <h1 className="hero__title">
                  Discover digital art
                  and collect NFTs
                </h1>
                <p className="hero__text txt">raroin is a shared liquidity
                  NFT
                  market smart contract
                  which
                  is used by multiple websites to provide the users the
                  best
                  possible experience.</p>
                <div className="space-x-20 d-flex flex-column flex-md-row
          sm:space-y-20">
                  <a className="btn btn-primary" href="Marketplace.html">View
                    market</a>
                  <a className="btn btn-white" href="Upload-type.html">
                    Upload your item</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid w-full" id="img_js" src="/assets/img/bg/in_hero1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section__artists mt-100">
        <div className="container">
          <div className="space-y-30">
            <div className="section_head">
              <h2 className="section__title">Top Artists</h2>
            </div>
            <div className="section_body swiper_artists">
              {/* Additional required wrapper */}
              <div className="swiper-wrapper position-relative">
                {/* Slides */}
                {artists.map(artist => (
                  <div key={artist._id} className="swiper-slide">
                    <div className="creator_item creator_card rounded_border space-x-10">
                      <div className="avatars space-x-10">
                        <div className="media">
                          <div className="badge">
                            <img src="/assets/img/icons/Badge.svg" alt="" />
                          </div>
                          <a href="Profile.html">
                            <img src="/assets/img/avatars/avatar_1.png" alt="Avatar" className="avatar avatar-md" />
                          </a>
                        </div>
                        <div>
                          <a href="Profile.html">
                            <p className="avatars_name color_black">{artist.name}</p>
                          </a>
                          <span className="price color_green">{artist.nfts.length} NFT(s)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              {/* If we need pagination */}
              <div className="swiper-pagination" />
              {/* If we need navigation buttons */}
              <div className="swiper-button-prev" />
              <div className="swiper-button-next" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-100">
        <div className="container">
          <div className="section__head">
            <div className="d-md-flex
      sm:space-y-20
      space-x-20
      justify-content-between
      align-items-center">
              <h2 className="section__title text-center">Latest Arts</h2>

            </div>
          </div>
          <div className="row">
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
          <div className="d-flex justify-content-center">
            <Link href="/market">
              <a className="btn btn-sm btn-white">
                <i className="ri-restart-line" />
                View all items
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="section mt-100">
        <div className="container">
          <div className="section__head">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="section__title"> Collections</h2>
              <Link href="/collections">
                <a href="Collections.html" className="btn btn-dark btn-sm">View All</a>
              </Link>
            </div>
          </div>
          <div className="row justify-content-center mb-30_reset">

            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_footer justify-content-center">
                  <h5 className="collection_title">
                    <Link href="/collections">
                      <a href="Collections.html">Games</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_footer justify-content-center">
                  <h5 className="collection_title">
                    <Link href="/collections">
                      <a href="Collections.html">Arts</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_footer justify-content-center">
                  <h5 className="collection_title">
                    <Link href="/collections">
                      <a href="Collections.html">Trading Cards</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="collections space-y-10 mb-30">
                <div className="collections_footer justify-content-center">
                  <h5 className="collection_title">
                    <Link href="/collections">
                      <a href="Collections.html">Memes</a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="logos__wrap">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-auto col-md-12">
              <h3 className="section__title md:mb-20 text-left d-flex
        justify-content-center">Loved
                by
                the community</h3>
            </div>
            <div className="col-lg-auto col-md-12">
              <div className="d-flex flex-column flex-md-row
        justify-content-center
        space-x-20 sm:space-x-0 sm:space-y-20 align-items-center">
                <img src="/assets/img/logos/1.svg" alt="" />
                <img src="/assets/img/logos/2.svg" alt="" />
                <img src="/assets/img/logos/3.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}