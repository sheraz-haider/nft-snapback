import React from 'react';
import Link from 'next/link';

const MintCollabItem = ({ title, description, img, video, minting, mint, cap, id, canMintMore, totalMinted }) => {
  return (
    <div className='mint_collabs_main'>
      <div className='mint_collabs_img'>
        <div className='mint_collabs_img_iner' style={{ overflow: "hidden" }}>
          <video controls={false} autoPlay={true} loop={true} muted={true} style={{ height: "100%"}}>
            <source
              src={video}
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
          {/* <a href='#'>
            <img src={img} alt='' />
          </a> */}
        </div>
        {/* <Link href='/upload-nfts'> */}
          {totalMinted === cap || canMintMore === 0 ? (
            <span className='mint_collabs_cta' style={{ cursor: "pointer", fontStyle: "italic" }}>Can't Mint</span>
          ) : (minting && minting === id ? (
            <span className='mint_collabs_cta' style={{ cursor: "pointer", fontStyle: "italic" }}>Minting...</span>
          ) : (
            <span className='mint_collabs_cta' style={{ cursor: "pointer" }} onClick={mint}>Mint</span>
          ))}
          <div className='mint-stats'>
            <span>{totalMinted}/{cap} minted</span>
            <span>You can mint {cap - totalMinted >= canMintMore ? canMintMore : cap - totalMinted} more</span>
          </div>
        {/* </Link> */}
      </div>
      <div className='mint_collabs_details'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MintCollabItem;
