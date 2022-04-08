import { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { nftaddress, nftmarketaddress } from '../config';
import Snapback from '../artifacts/contracts/Snapback.sol/Snapback.json';
import Header from '../components/header/Header';
import InnerFooter from '../components/InnerFooter/InnerFooter';
import assets from '../assets/images';
import axios from 'axios';

import MintCollabItem from '../components/minCollabItem/MintCollabItem';

import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

const __nfts = [
  {
    id: 1,
    name: 'Avastars',
    description:
      "Avastars is one of the most Iconic NFT collections in this space. Built on the Ethereum blockchain, Avastars is the first-ever completely on-chain breedable NFT project. Moreover, it was the first project to store all their art and metadata on Ethereum.  Having been learning about NFT's it was amazing what Avastars created. The first 5,000 Avastars were dropped in February 2020, when NFTs were not as mainstream as they are now. Today, these avatars are one of the top avatar NFT collectibles on Ethereum. So We created the 1st Avastar Series 1, using one of the previous co-founder from @nft42.",
    image:
      'https://bafybeihwvuaz2es7yatd5ozblviptnu6x7n6rv465qbqewpmoxeha7wvcy.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeibae5mmqj2j63tyjqbn3dpwrx34og6mccngo4cwvm2swxeyrvkdre.ipfs.infura-ipfs.io/',
  },
  {
    id: 2,
    name: 'Drippers',
    description:
      "Drippies™ is a Collectible designer toys on the blockchain. Created by Florian Tappeser, who is a movie industry veteran who worked on many acclaimed animation hits like Hotel Transylvania and How To Train Your Dragon & the brand creator of the Drippieverse™. From Drippin' straight into ur wallet since 2021 to now being able to get a hold one of the Most unique Drippies Merchandise. Now Officially you can buy the 1st Drippies™ NFTsnapback.",
    image:
      'https://bafybeifrfrf6roheuoyjno7ylu235t7df23x2yhhhx2atmkk5h2l2s7xtu.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeiblyf2qulzjjtcskgpb7mfxshw2bruyuzrm7gcp36nfb53hpiwpja.ipfs.infura-ipfs.io/',
  },
  {
    id: 3,
    name: 'Unofficial Punks',
    description:
      'Unofficial Punks™ was started and created by Eric, who is an award winning NFT artist, and founder of Second Realm. Eric has done many things in the space from pushing in #trashart. Unofficial Punks™ started as an organic social collaboration paying homage to the CryptoPunks. The award-winning artist, Second Realm, ignited the alt-punks movement and the NFT avatar renaissance after he tweeted his custom punk. Now Officially you can buy the 1st Unofficial Punks merchandise in partnership with NFTsnapaback.',
    image:
      'https://bafybeihrlxlcreoaaeqi542553gk3kpj567yq3fyrdfgizknp2um4rlwka.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeibbezcrdcdxmzm37xvthumpai5hwikuk6agppskzrgd4c7qpikvgu.ipfs.infura-ipfs.io/',
  },
  {
    id: 4,
    name: 'Cocain Cowboy',
    description:
      'The 1st official CloudWhite $Coke Merchandise collaborated with NFTsnapabck. CloudWhite is regarded as one of the OG’s in the NFT space. Known for his influential role with Axie Infinity community amongst many other things, but the creation of $COKE or Cocain Cowboy was something special. CloudWhite was the 1st to start an art campaign around a very unique little creature: Axie #2646. Now Officially you can buy the 1st $coke merchandise in partnership with NFTsnapback.',
    image:
      'https://bafybeifdq7dsqe4zmzprddkrtzyjx456h46wgjwhysntvm3kv2h3slyr3u.ipfs.infura-ipfs.io/',
    video:
      'https://bafybeiaaav5f3q7tshx5vwe5pf7ohhdlo6uptpjcbt556c7cw5rd2uagkm.ipfs.infura-ipfs.io/',
  },
];

const MintNfts = () => {
  const [address, setAddress] = useState(null);
  const [wait, setWait] = useState(null);
  const [minting, setMinting] = useState(null);
  const [nfts, setNfts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!address) loadConnectedProfile();
    else {
      loadNFTs();
    }
  }, [address]);

  async function loadConnectedProfile() {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const _address = await provider.getSigner().getAddress();
    const _bal = await provider.getSigner().getBalance();
    setAddress(_address);
    console.log(address);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async function loadNFTs() {
    try {
      const __nfts = await axios({
        method: 'get',
        url: `/api/v1/snapback`,
      });
      if (__nfts.data) {
        console.log(__nfts.data);
        setNfts(__nfts.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const mintToken = async item => {
    // return;
    setWait('Minting token...');
    setMinting(item.id);
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    try {
      /* next, create the item */
      let contract = new ethers.Contract(nftaddress, Snapback.abi, signer);
      const tokenPrice = ethers.utils.parseUnits('0.08', 'ether');

      let transaction = await contract.mintToken(item.id, {
        value: tokenPrice,
      });
      let tx = await transaction.wait();
      console.log(tx);

      const nft = await axios({
        method: 'post',
        url: `/api/v1/snapback`,
        data: {
          ...item,
          owner: address,
        },
      });
      if (nft.data) {
        // console.log(nft.data);
        router.push('/collected-nfts');
        return;
      }
    } catch (error) {
      console.log(error.message);
      let _msg =
        error.message.split(',"message":"').length > 1 &&
        capitalizeFirstLetter(
          error.message.split(',"message":"')[1].split('","')[0]
        );
      toast.error(_msg, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setWait(null);
      setMinting(null);
    }

    // router.push('/')
  };

  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1 className='superion-font'>NFTsnapback Official Collab</h1>
          <p>
            Official Collaboration & Partnership from some of the leading
            project to influential People in this space.
          </p>
        </div>
      </div>
      <div className='mint_collabs'>
        <div className='wrapper'>
          {__nfts.map(item => (
            <MintCollabItem
              key={`nft-${item.id}`}
              img={item.image}
              video={item.video}
              id={item.id}
              title={item.name}
              description={item.description}
              minting={minting}
              mint={() => mintToken(item)}
              canMintMore={
                5 -
                nfts.filter(i => i.owner === address && i.id === item.id).length
              }
              totalMinted={nfts.filter(i => i.id === item.id).length}
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
