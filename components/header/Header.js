import React from 'react';

import { Link } from 'react-router-dom';

import assets from '../../assets/images';

const Header = () => {
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
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/collected-nfts'>Collected NFTs</Link>
              </li>
              <li>
                <Link to='/claim-nfts'>Claim NFTs</Link>
              </li>
              <li>
                <Link to='/mint-nfts'>Mint NFTs</Link>
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
            <div
              className='header_custom_select connect'
              style={{ display: 'none' }}
            >
              <a href='javascript:void(0);'>Connect Wallet</a>
            </div>
            <div className='header_custom_select'>
              <a href='javascript:void(0);'>Connected Wallet</a>
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
                          <h4>0x09750ad...360fdb7</h4>
                          <p>Phantom</p>
                        </div>
                      </div>
                      <a href='#'>
                        <img src={assets.copyIcon} alt='' />
                      </a>
                    </div>
                  </div>
                  <div className='wallet_drop_down_btm'>
                    <a href='#'>Disconnect Wallet</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
