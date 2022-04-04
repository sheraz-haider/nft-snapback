import React from 'react';

import assets from '../../assets/images';

const InnerFooter = () => {
  return (
    <div className='inner_footer'>
      <div className='wrapper'>
        <div className='inner_footer_in'>
          <div className='inner_footer_details'>
            <a href='#' className='inerr_footer_logo'>
              <img src={assets.footerLogo} alt='' />
            </a>
            <p>
            O.G.C || NFTsnapback is metaverse apparel brand that aims to blend the digital and physical world through merchandise
            </p>
          </div>
          <div className='inner_footer_about'>
            <h3>About</h3>
            <p>
            Our mission is to create a brand where any apparel can be wearable and utilised by the owner in the physical world, and in the digital world via profile pictures (PFP’s) and metaverse avatars.
            </p>
          </div>
          <div className='inner_footer_about'>
            <h3>Address</h3>
            <p>27 Old Gloucester Street </p>
            <p>London </p>
            <p>England </p>
            <p>WC1N 3AX </p>
          </div>
          <div className='inner_footer_about'>
            <h3>Contact</h3>
            <a href='mailto:Info@NFTsnapback.com'>Info@NFTsnapback.com</a>
            <ul className='inner_footer_social'>
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
      </div>
    </div>
  );
};

export default InnerFooter;
