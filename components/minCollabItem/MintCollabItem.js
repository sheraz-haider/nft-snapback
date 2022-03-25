import React from 'react';
import Link from 'next/link';

const MintCollabItem = ({ title, description, img, minting, mint }) => {
  return (
    <div className='mint_collabs_main'>
      <div className='mint_collabs_img'>
        <div className='mint_collabs_img_iner'>
          <a href='#'>
            <img src={img} alt='' />
          </a>
        </div>
        {/* <Link href='/upload-nfts'> */}
          {minting ? (
            <span className='mint_collabs_cta' style={{ cursor: "pointer", fontStyle: "italic" }}>Minting...</span>
          ) : (
            <span className='mint_collabs_cta' style={{ cursor: "pointer" }} onClick={mint}>Mint</span>
          )}
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
