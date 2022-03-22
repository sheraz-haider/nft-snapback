import React from 'react';
import { Link } from 'react-router-dom';

const MintCollabItem = ({ title, description, img }) => {
  return (
    <div className='mint_collabs_main'>
      <div className='mint_collabs_img'>
        <div className='mint_collabs_img_iner'>
          <a href='#'>
            <img src={img} alt='' />
          </a>
        </div>
        <Link to='/burned-nfts' className='mint_collabs_cta'>
          Mint
        </Link>
      </div>
      <div className='mint_collabs_details'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MintCollabItem;
