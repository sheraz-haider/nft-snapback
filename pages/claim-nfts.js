import React from 'react';

import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';

import assets from '../assets/images';
import Link from 'next/link';

const nfts = ['Claim Cyberkong', 'Claim offical collab'];

const ClaimNfts = () => {
  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1>Claim NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className='collected_nfts_main claim_nfts_page'>
        <div className='wrapper'>
          <div className='collected_nfts_iner'>
            <div className='collected_nfts_cont'>
              <div className='collected_nfts_cont_img'>
                <a href='#'>
                  <img src={assets.projectImg} alt='' />
                </a>
              </div>
              <a href='https://www.heyotetsuo.com/kongz-claim/' className='collected_nfts_cta'>
                {'Claim Cyberkong'}
              </a>
            </div>
            <div className='collected_nfts_cont'>
              <div className='collected_nfts_cont_img'>
                <a href='#'>
                  <img src={assets.projectImg} alt='' />
                </a>
              </div>
              <Link href='/collected-nfts'>
                <a href='#' className='collected_nfts_cta'>
                  {'Claim offical collab'}
                </a>
              </Link>

            </div>
            <div className='collected_nfts_cont'>
              <div className='collected_nfts_cont_img'>
                <a href='#'>
                  <img src={assets.projectImg} alt='' />
                </a>
                <div className='claim_hover'>
                  <img src='assets/images/question.png' alt='' />
                  <p>Coming Soon</p>
                </div>
              </div>
              {/* <Link href='/upload-nfts'> */}
                <span className='collected_nfts_cta' >Create custom 1 of 1</span>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default ClaimNfts;
