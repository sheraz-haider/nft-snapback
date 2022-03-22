import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import axios from 'axios'

function Marketplace({ Component, pageProps }) {
  const [address, setAddress] = useState(null)
  const [balance, setBalance] = useState(0.00)
  const [isRegistered, setIsRegistered] = useState(false)
  const [popupOpened, setPopupOpened] = useState(false)
  useEffect(() => {
    if(!address)
      connect()
  }, [address])
  async function connect() {
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
      setIsRegistered(true)
    }
    setBalance(Number(ethers.utils.formatEther(Number(_bal).toString())).toFixed(2))
    setAddress(_address)
    console.log(address, _artist.data);
  }


  return (
    <div className="overflow-hidden">
      <Head>
        <meta name="keywords" content="bootstrap, creabik, ThemeForest, bootstrap5, agency theme, saas
        theme, sass, html5" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> - wallets </title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="stylesheet" href="/assets/css/plugins/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/plugins/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        <script defer src="/assets/js/jquery-3.6.0.js"></script>
        <script defer src="/assets/js/bootstrap.bundle.min.js"></script>
        <script defer src="/assets/js/swiper-bundle.min.js" id="swiper-bundle-script"></script>
        <script defer src="/assets/js/gsap.min.js"></script>
        <script defer src="/assets/js/ScrollTrigger.min.js"></script>
        <script defer src="/assets/js/sticky-sidebar.js"></script>
        <script defer src="/assets/js/script.js"></script>
      </Head>
      <header className="header__1 js-header" id="header">
        <div className="container">
          <div className="wrapper js-header-wrapper">
            <div className="header__logo">
              <Link href="/">
                <img className="header__logo" id="logo_js" src="assets/img/logos/Logo.svg" alt="logo" />
              </Link>
            </div>
            {/* ==================  */}
            <div className="header__menu">
              <ul className="d-flex space-x-20">
                <li>
                  <Link href="/"><a className="color_black">Home</a></Link>
                </li>
                <li>
                  <Link href="/market"><a className="color_black">Marketplace</a></Link>
                </li>
                <li>
                  <Link href="/artists"><a className="color_black">Artists</a></Link>
                </li>
                {/* <li>
                  <Link href="/create-item"><a className="color_black">Upload</a></Link>
                </li> */}
                {/* <li>
                  <Link href="/creator-dashboard"><a className="color_black">Profile</a></Link>
                </li> */}

              </ul>
            </div>
            {/* ================= */}

            <div className="header__btns">
              {/* <a className="btn btn-grad btn-sm" style={{ float: "left" }} href="Connect-wallet.html">
                <i className="ri-wallet-3-line" />
                Connect wallet</a> */}
                {address ? (
                  <div className="d-flex align-items-center space-x-20">
                    <div className="header__avatar" onClick={() => setPopupOpened(!popupOpened)}>
                      <div className="price">
                        <span>{balance} <strong>ETH</strong> </span>
                      </div>
                      <img className="avatar" src="assets/img/avatars/avatar_2.png" alt="avatar" />
                      <div className="avatar_popup space-y-20" style={popupOpened ? { visibility: "visible", opacity: 1 } : {}}>
                        <div className="d-flex align-items-center justify-content-between">
                          <span> {String(address).slice(0, 15)}... </span>
                          <a href="index.html" className="ml-2">
                            <i className="ri-file-copy-line" />
                          </a>
                        </div>
                        <div className="d-flex align-items-center space-x-10">
                          <img className="coin" src="assets/img/logos/coin.svg" alt="/" />
                          <div className="info">
                            <p className="text-sm font-book text-gray-400">Balance</p>
                            <p className="w-full text-sm font-bold text-green-500">{balance} ETH</p>
                          </div>
                        </div>
                        {/* <div className="hr" />
                        <div className="links space-y-10">
                          <a href="#">
                            <i className="ri-landscape-line" /> <span> My items</span>
                          </a>
                          <a href="edit_profile.html">
                            <i className="ri-pencil-line" /> <span> Edit Profile</span>
                          </a>
                          <a href="#">
                            <i className="ri-logout-circle-line" /> <span> Logout</span>
                          </a>
                        </div> */}
                      </div>
                    </div>
                    <div className="header__btns">
                      {isRegistered ? (
                        <Link href="/create-item"><a className="btn btn-primary btn-sm">Create NFT</a></Link>
                      ) : (
                        <Link href="/register"><a className="btn btn-primary btn-sm">Register</a></Link>
                      )}
                    </div>
                    <div className="header__burger js-header-burger" />
                  </div>
                ) : (
                  <Link href="/register">
                    <a className="btn btn-grad btn-sm" style={{ float: "left" }}>
                      <i className="ri-wallet-3-line" />
                      {'Connect wallet'}
                    </a>
                  </Link>
                )}

              {/* <a href="#" style={{ display: "inline-block" }} id="connectbtn">
                <img height={35} src="assets/img/icons/metamask.svg" alt="" />
              </a> */}
            </div>
            <div className="header__burger js-header-burger" />
            <div className="header__mobile js-header-mobile">
              <div className="header__mobile__menu space-y-40">
                <ul className="d-flex space-y-20">
                  <li> <a className="color_black" href="Marketplace.html"> Marketplace</a> </li>
                  <li> <a className="color_black" href="Collections.html"> Collections</a> </li>
                  <li> <a className="color_black" href="Profile.html"> Profile</a> </li>
                  <li> <a className="color_black" href="Creators.html"> Creators</a> </li>
                </ul>
                <div className="space-y-20">
                  <div className="header__search in_mobile w-full">
                    <input type="text" placeholder="Search" />
                    <button className="header__result">
                      <i className="ri-search-line" />
                    </button>
                  </div>


                  <a className="btn btn-grad btn-sm" href="Connect-wallet.html">Connect
                    wallet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="footer__1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 space-y-20">
              <div className="footer__logo">
                <a href="index.html">
                  <img src="/assets/img/logos/Logo.svg" alt="logo" id="logo_js_f" />
                </a>
              </div>
              <p className="footer__text">
                raroin is a shared liquidity NFT market smart contract
              </p>
              <div>
                <ul className="footer__social space-x-10 mb-40">
                  <li> <a href="#"> <i className="ri-facebook-line" /> </a>
                  </li>
                  <li> <a href="#"> <i className="ri-messenger-line" /> </a>
                  </li>
                  <li> <a href="#"> <i className="ri-whatsapp-line" /> </a>
                  </li>
                  <li> <a href="#"> <i className="ri-youtube-line" /> </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Raroin</h6>
              <ul className="footer__list">
                <li> <a href="Home1.html"> Home1 </a>
                </li>
                <li> <a href="Home2.html"> Home2
                  </a> </li>
                <li> <a href="Home3.html"> Home3 </a> </li>
                <li> <a href="Marketplace.html"> Marketplace
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Assets</h6>
              <ul className="footer__list">
                <li> <a href="Profile.html"> Profile </a>
                </li>
                <li> <a href="Creators.html"> Creators </a>
                </li>
                <li> <a href="Collections.html"> Colletctions </a>
                </li>
                <li> <a href="Activity.html"> Activity
                  </a> </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Company</h6>
              <ul className="footer__list">
                <li> <a href="Upload-type.html"> Upload Types </a>
                </li>
                <li> <a href="Upload.html"> Upload </a> </li>
                <li> <a href="Connect-wallet.html"> Connect wallet
                  </a> </li>
                <li> <a href="Item-details.html"> Item details </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright text-center">
            Copyright © 2021. Created with love by creabik.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Marketplace