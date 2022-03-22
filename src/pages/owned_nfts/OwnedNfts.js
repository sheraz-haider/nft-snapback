import React from 'react';
import Header from '../../components/header/Header';
import InnerFooter from '../../components/InnerFooter/InnerFooter';

import assets from '../../assets/images';

import OwnedNft from '../../components/ownedNft/OwnedNft';

const OwnedNfts = () => {
  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1>Owned NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className='mint_collabs'>
        <div className='wrapper'>
          {Array.from({ length: 2 }, (_, i) => i + 1).map(item => (
            <OwnedNft
              key={item}
              title='O.G.C || AVASTAR Series 1'
              img={assets.projectImg}
            />
          ))}
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default OwnedNfts;
