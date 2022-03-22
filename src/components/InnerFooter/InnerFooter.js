import React from 'react';

import assets from '../../assets/images';

const InnerFooter = () => {
  return (
    <div class='inner_footer'>
      <div class='wrapper'>
        <div class='inner_footer_in'>
          <div class='inner_footer_details'>
            <a href='#' class='inerr_footer_logo'>
              <img src={assets.footerLogo} alt='' />
            </a>
            <p>
              The best NFT marketplace website in the world and feel your
              experience in collab or buy our work
            </p>
          </div>
          <div class='inner_footer_about'>
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
          </div>
          <div class='inner_footer_about'>
            <h3>Address</h3>
            <p>123, XYZ Street </p>
          </div>
          <div class='inner_footer_about'>
            <h3>Contact</h3>
            <p>+012 3456789</p>
            <a href='tel:nftsnapback@gmail.com'>nftsnapback@gmail.com</a>
            <ul class='inner_footer_social'>
              <li>
                <a href='#'>
                  <img src={assets.youtube} alt='' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={assets.discord} alt='' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src={assets.instagramHolo} alt='' />
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
