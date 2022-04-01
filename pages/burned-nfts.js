import React from 'react';
import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import axios from 'axios'
import assets from '../assets/images';
import BurnedNft from '../components/burnedNft/BurnedNft';
import { useEffect, useState } from 'react'

const BurnedNfts = () => {
  const [nfts, setNfts] = useState([])
  const [filter, setFilter] = useState("all");

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

  let filteredNfts = filter === "all" ? nfts : nfts.filter(n => n.shippingStatus === filter)

  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1 className='superion-font'>Burned NFTs</h1>
          <p>
            <br />
            <br />
            <button className={`burned-filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
            <button className={`burned-filter-btn ${filter === "PENDING" ? "active" : ""}`} onClick={() => setFilter("PENDING")}>Pending</button>
            <button className={`burned-filter-btn ${filter === "PROCESSING" ? "active" : ""}`} onClick={() => setFilter("PROCESSING")}>Processing</button>
            <button className={`burned-filter-btn ${filter === "SHIPPED" ? "active" : ""}`} onClick={() => setFilter("SHIPPED")}>Shipped</button>
            <button className={`burned-filter-btn ${filter === "DELIVERED" ? "active" : ""}`} onClick={() => setFilter("DELIVERED")}>Delivered</button>
          </p>
        </div>
      </div>
      <div className='mint_collabs'>
        <div className='wrapper'>
          {filteredNfts.map(item => (
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
