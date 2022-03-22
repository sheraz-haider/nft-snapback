import React from 'react';

import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import Link from 'next/link';

import assets from '../assets/images';

const CollectedNfts = () => {
  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1>Collected NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className='collected_nfts_main'>
        <div className='wrapper'>
          <div className='collected_nfts_iner'>
            {Array.from({ length: 6 }, (_, i) => i + 1).map(e => (
              <div className='collected_nfts_cont'>
                <div className='collected_nfts_cont_img'>
                  <a href='#'>
                    <img src={assets.projectImg} alt='' />
                  </a>
                </div>
                <Link href='/owned-nfts'>
                  <span className='collected_nfts_cta' style={{ cursor: "pointer" }}>Claim Physical</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default CollectedNfts;
