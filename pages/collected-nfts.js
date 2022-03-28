import React from 'react';

import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import Link from 'next/link';
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from "web3modal"

import {
  nftaddress
} from '../config'

import Snapback from '../artifacts/contracts/Snapback.sol/Snapback.json'

import Moralis from "moralis";
import assets from '../assets/images';
import BurnedNft from '../components/burnedNft/BurnedNft';

import { ToastContainer, toast } from 'react-toastify';

/* Moralis init code */
const serverUrl = "https://z45j2piboebx.usemoralis.com:2053/server";
const appId = "2vQqPUPlVqmKua5agETllLCJFLrbuAjqfJ2zH1zO";
const masterKey = "pkbFmPKhYIZyVd4WuOJYjMGbM8W5lOWRSj0dIqJP";


const CollectedNfts = () => {

  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  const [nftCount, setNftCount] = useState(0);
  const [updateShippingAddress, setUpdateShippingAddress] = useState(null);


  const [address, setAddress] = useState(null)

  useEffect(() => {
    if(!address) {
      loadConnectedProfile()
    }
    else {
      loadNFTs()
    }
  }, [address])

  async function loadConnectedProfile() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const _address = await provider.getSigner().getAddress()
    const _bal = await provider.getSigner().getBalance()
    setAddress(_address)
    console.log(address);
  }

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
        setNfts(__nfts.data.filter(i => i.owner === address))
      }
      // else {
      //   await Moralis.start({ serverUrl, appId, masterKey });
      //   const options = {
      //     chain: "rinkeby",
      //     address,
      //     token_address: nftaddress,
      //   };
      //   const ethereumNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
      //   const _nfts = ethereumNFTs.result.map(n => ({ ...n, metadata: JSON.parse(n.metadata) }))
      //   setNfts(_nfts)
      //   console.log(ethereumNFTs, _nfts);
      // }

      setLoadingState('loaded')
    } catch (error) {
      console.log(error);
    }

  }

  async function burnNft(item) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    try {

    } catch (error) {
      console.log(error.message);
      let _msg = error.message.split(',"message":"').length > 1 && capitalizeFirstLetter(error.message.split(',"message":"')[1].split('","')[0]);
      toast.error(_msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    /* next, create the item */
    let contract = new ethers.Contract(nftaddress, Snapback.abi, signer)
    let transaction = await contract.burnToken(item.id)
    await transaction.wait()

    const nft = await axios({
      method: 'post',
      url: `/api/v1/snapback/${item._id}/burn`,
      // data: {
      //   ...item,
      //   owner: address,
      // },
    })
    if(nft.data) {
      // console.log(nft.data);
      loadNFTs()
      return;
    }

    // loadNFTs()
    // localStorage.setItem("____ttl", Number(localStorage.getItem("____ttl")) - 1)
    // setNftCount(nftCount - 1)
  }

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
      {updateShippingAddress ? (
        <div className='mint_collabs'>
          <div className='wrapper'>
            <BurnedNft
              title={`O.G.C || ${updateShippingAddress.name.toUpperCase()} Series 1`}
              img={assets.projectImg}
              item={updateShippingAddress}
              back={() => {setUpdateShippingAddress(null); loadNFTs();}}
              type={`shippingAddress`}
            />
          </div>
        </div>
      ) : (
        <div className='collected_nfts_main'>
          <div className='wrapper'>
            <div className='collected_nfts_iner'>
              {nfts.map((item, itemIndex) => (
                <div className='collected_nfts_cont' key={`item-${itemIndex}`}>
                  <div className='collected_nfts_cont_img'>
                    <a href='#'>
                      <img src={item.image} alt='' />
                    </a>
                  </div>
                  {/* <Link href='/owned-nfts'> */}
                    {item.burnt ? (
                      <span className='collected_nfts_cta claimed' style={{ cursor: "pointer" }} onClick={() => setUpdateShippingAddress(item)}>Shipping Details</span>
                    ) : (
                      <span className='collected_nfts_cta' style={{ cursor: "pointer" }} onClick={() => burnNft(item)}>Claim Physical</span>
                    )}
                  {/* </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
      <InnerFooter />
    </>
  );
};

export default CollectedNfts;
