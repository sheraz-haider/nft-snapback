import React from 'react';

import assets from '../../assets/images';

const Footer = () => {
  return (
    <div className='footer_main'>
      <div className='wrapper'>
        <a href='#' className='footer_logo'>
          <img src={'/NFTsnapback-big-logo.png'} alt='' style={{ width: "400px" }} />
        </a>
        <div className='footer_details'>
          <p>
          To enquire to work with O.G.C || NFTsnapback please don’t hesitate to contact us. NFTsnapbacks aims to be the number 1 snapback brand that aim to bring physical fashion, style andl merge with your NFTs.
          </p>
        </div>
        <a href='mailto:info@NFTsnapback.com' className='footer_cta'>
          Contact Us
        </a>
        <ul className='footer_social'>
          <li>
            <a href='#'>
              <img src={assets.facebookIcon} alt='' />
            </a>
          </li>
          <li>
            <a href='http://www.medium.com/@nftsnapback'>
              <img src={assets.mediumIcon} alt='' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/nftsnapback'>
              <img src={assets.instagram} alt='' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com/nftsnapback'>
              <img src={assets.twitter} alt='' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
