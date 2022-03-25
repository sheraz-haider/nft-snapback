import React from 'react';
import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import axios from 'axios'
import assets from '../assets/images';
import BurnedNft from '../components/burnedNft/BurnedNft';
import { useEffect, useState } from 'react'

const BurnedNfts = () => {
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    loadNFTs()
  }, [])

  async function loadNFTs() {
    try {
      const __nfts = await axios({
        method: 'get',
        url: `/api/v1/snapback`,
        // data: {
        //   ...item,
        //   owner: address,
        // },
      })
      if(__nfts.data) {
        console.log(__nfts.data);
        setNfts(__nfts.data.filter(i => i.burnt))
      }

      setLoadingState('loaded')
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1>Burned NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className='mint_collabs'>
        <div className='wrapper'>
          {nfts.map(item => (
            <BurnedNft
              key={`item-${item._id}`}
              title={`O.G.C || ${item.name.toUpperCase()} Series 1`}
              img={item.image}
              item={item}
              back={() => {loadNFTs();}}
              type={`shippingStatus`}
            />
          ))}
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default BurnedNfts;
