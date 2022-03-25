import React from 'react';
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from "web3modal"
import Link from 'next/link';

import assets from '../../assets/images';

const Header = () => {
  const [address, setAddress] = useState(null)
  const [balance, setBalance] = useState(0.00)
  const [popupOpened, setPopupOpened] = useState(false)

  useEffect(() => {
    // if(!address)
      connect()
  }, [address])

  async function connect() {
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
    //   setIsRegistered(true)
    // }
    setBalance(Number(ethers.utils.formatEther(Number(_bal).toString())).toFixed(2))
    setAddress(_address)
    console.log(address);
  }

  async function disconnect() {
    setAddress(null)
  }

  return (
    <header className='main_header'>
      <div className='wrapper'>
        <div className='header_iner'>
          <div className='header_iner_left'>
            <a href='#' className='logo_main'>
              <img src={assets.logo} alt='' />
            </a>
            <ul className='main_menu'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/collected-nfts'>Collected NFTs</Link>
              </li>
              <li>
                <Link href='/claim-nfts'>Claim NFTs</Link>
              </li>
              <li>
                <Link href='/mint-nfts'>Mint NFTs</Link>
              </li>
            </ul>
            <span className='mob_menu_icon'></span>
          </div>
          <div className='header_iner_right'>
            <ul className='header_social'>
              <li>
                <a href='#'>
                  <img src={assets.mediumIcon} alt='' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={assets.instagram} alt='' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={assets.facebook} alt='' />
                </a>
              </li>
            </ul>
            {!address ? (
              <div
                className='header_custom_select connect'
              >
                <a href='#' onClick={connect}>Connect Wallet</a>
              </div>
            ) : (
              <div className='header_custom_select'>
                <a href='#'>Connected Wallet</a>
                <div className='wallet_drop_down'>
                  <div className='wallet_drop_down_iner'>
                    <div className='wallet_drop_down_top'>
                      <h3>Your Wallet</h3>
                      <div className='header_wallet'>
                        <div className='header_wallet_left'>
                          <div className='header_wallet_img'>
                            <img src={assets.wallet} alt='' />
                          </div>
                          <div className='header_wallet_details'>
                            <h4>{address.slice(0, 13) + '...' + address.slice(35)}</h4>
                            <p>Metamask</p>
                          </div>
                        </div>
                        <a href='#'>
                          <img src={assets.copyIcon} alt='' />
                        </a>
                      </div>
                    </div>
                    <div className='wallet_drop_down_btm'>
                      <a href='#' onClick={disconnect}>Disconnect Wallet</a>
                    </div>
                  </div>
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
