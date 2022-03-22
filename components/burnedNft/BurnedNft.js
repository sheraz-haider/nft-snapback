import React from 'react';

const BurnedNft = ({ title, img }) => {
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
            <label>Physical address</label>
            <textarea>
              123 House, abc street, loreum city, 5400, XYZ city
            </textarea>
          </div>
          <div className='burned_nfts_botm'>
            <div className='burned_nft_field'>
              <label>Shipping Status</label>
              <div className='burned_nft_custom_select'>
                <select>
                  <option>Pending</option>
                  <option>Pending 2</option>
                </select>
              </div>
            </div>
            <div className='burned_nft_btn'>
              <input type='submit' value='Update' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BurnedNft;
