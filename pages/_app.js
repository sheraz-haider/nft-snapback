import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import axios from 'axios'
import '../assets/css/style.css';

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
    <div>
      <Head>
        <meta name="keywords" content="bootstrap, creabik, ThemeForest, bootstrap5, agency theme, saas
        theme, sass, html5" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> - wallets </title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* {address ? (
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
      )} */}

      <Component {...pageProps} />

    </div>
  )
}

export default Marketplace