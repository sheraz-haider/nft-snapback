import React from 'react';

const OwnedNft = ({ title, img }) => {
  return (
    <div className='mint_collabs_main'>
      <div className='mint_collabs_img'>
        <div className='mint_collabs_img_iner'>
          <a href='#'>
            <img src={img} alt='' />
          </a>
        </div>
        <h4>{title}</h4>
      </div>
      <div className='mint_collabs_details'>
        <form>
          <div className='burned_nft_field'>
            <label>Owner Name</label>
            <input type='text' value='John doe' />
          </div>
          <div className='burned_nft_field'>
            <label>Owner wallet address</label>
            <input type='text' value='mvNuSww4hjGVpMcjdby32XXxTaqEVcwYre' />
          </div>
          <div className='burned_nft_field'>
            <label>Transaction date</label>
            <input type='text' value='31-02-2022' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OwnedNft;
