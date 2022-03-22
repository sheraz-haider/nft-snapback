import React from 'react';
import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import assets from '../assets/images';

import MintCollabItem from '../components/minCollabItem/MintCollabItem';

const MintNfts = () => {
  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1>Offical Collab</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className='mint_collabs'>
        <div className='wrapper'>
          {Array.from({ length: 4 }, (_, i) => i + 1).map(item => (
            <MintCollabItem
              key={item}
              img={assets.projectImg}
              title='O.G.C || AVASTAR Series 1'
              description='Rizzle The 1st Official Rizzle Merchandise collaborated with
            NFTsnapback. If you you don’t know anything about Rizzle well
            he is a MetaVerse Maximum-list. Has started and found some
            amazing projects in the space. Notably known for being
            Co-founder of project like Avastars, NFT42, and host of many
            shows across the meatverse & the Matthew & Rizzle show. He is
            also currently working on #therizzleproject. 100% proceeds of
            the sale of the Rizzle Avastars collection will go to a
            charity Foundation that is Started up by NFTsnapback. More
            information to come out. Now Officially you can buy the 1st
            Rizzle Avastars merchandise in partnership with NFTsnapabck.'
            />
          ))}
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default MintNfts;
