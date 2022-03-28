import { useState, useEffect, useRef } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import {
  nftaddress, nftmarketaddress
} from '../config'
import Snapback from '../artifacts/contracts/Snapback.sol/Snapback.json'
import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import assets from '../assets/images';
import axios from 'axios'

import MintCollabItem from '../components/minCollabItem/MintCollabItem';

import { ToastContainer, toast } from 'react-toastify';

const nfts = [
  {
    id: 1,
    name: "Avastars",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeihwvuaz2es7yatd5ozblviptnu6x7n6rv465qbqewpmoxeha7wvcy.ipfs.infura-ipfs.io/",
    video: "https://bafybeibae5mmqj2j63tyjqbn3dpwrx34og6mccngo4cwvm2swxeyrvkdre.ipfs.infura-ipfs.io/"
  },
  {
    id: 2,
    name: "Drippers",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeifrfrf6roheuoyjno7ylu235t7df23x2yhhhx2atmkk5h2l2s7xtu.ipfs.infura-ipfs.io/",
    video: "https://bafybeiblyf2qulzjjtcskgpb7mfxshw2bruyuzrm7gcp36nfb53hpiwpja.ipfs.infura-ipfs.io/"
  },
  {
    id: 3,
    name: "Unofficial Punks",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeihrlxlcreoaaeqi542553gk3kpj567yq3fyrdfgizknp2um4rlwka.ipfs.infura-ipfs.io/",
    video: "https://bafybeibbezcrdcdxmzm37xvthumpai5hwikuk6agppskzrgd4c7qpikvgu.ipfs.infura-ipfs.io/"
  },
  {
    id: 4,
    name: "Cocain Cowboy",
    description: "Rizzle The 1st Official Rizzle Merchandise collaborated with NFTsnapback. If you you don’t know anything about Rizzle well he is a MetaVerse Maximum-list. Has started and found some amazing projects in the space. Notably known for being Co-founder of project like Avastars, NFT42, and host of many shows across the meatverse & the Matthew & Rizzle show. He is also currently working on #therizzleproject. 100% proceeds of the sale of the Rizzle Avastars collection will go to a charity Foundation that is Started up by NFTsnapback. More information to come out. Now Officially you can buy the 1st Rizzle Avastars merchandise in partnership with NFTsnapabck.",
    image: "https://bafybeifdq7dsqe4zmzprddkrtzyjx456h46wgjwhysntvm3kv2h3slyr3u.ipfs.infura-ipfs.io/",
    video: "https://bafybeiaaav5f3q7tshx5vwe5pf7ohhdlo6uptpjcbt556c7cw5rd2uagkm.ipfs.infura-ipfs.io/"
  },
];


const MintNfts = () => {
  const [address, setAddress] = useState(null)
  const [wait, setWait] = useState(null)

  useEffect(() => {
    if(!address)
      loadConnectedProfile()
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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const mintToken = async (item) => {
    setWait('Minting token...')
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    try {
      /* next, create the item */
      let contract = new ethers.Contract(nftaddress, Snapback.abi, signer)
      const tokenPrice = ethers.utils.parseUnits('0.08', 'ether')

      let transaction = await contract.mintToken(item.id, {
        value: tokenPrice
      })
      let tx = await transaction.wait()
      console.log(tx);

      const nft = await axios({
        method: 'post',
        url: `/api/v1/snapback`,
        data: {
          ...item,
          owner: address,
        },
      })
      if(nft.data) {
        // console.log(nft.data);
        window.location.replace('/collected-nfts')
        return;
      }
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
      setWait(null)
    }

    // router.push('/')
  }

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
          {nfts.map(item => (
            <MintCollabItem
              key={`nft-${item.id}`}
              img={item.image}
              title={item.name}
              description={item.description}
              minting={wait !== null}
              mint={() => mintToken(item)}
            />
          ))}
        </div>
      </div>
      <ToastContainer />
      <InnerFooter />
    </>
  );
};

export default MintNfts;
