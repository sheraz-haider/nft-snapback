import React, { useState, useEffect } from 'react';
import axios from 'axios'

const BurnedNft = ({ title, img, item, back, type }) => {
  const [shippingAddress, setShippingAddress] = useState(item.shippingAddress);
  const [shippingName, setShippingName] = useState(item.shippingName);
  const [shippingEmail, setShippingEmail] = useState(item.shippingEmail);
  const [shippingContactNo, setShippingContactNo] = useState(item.shippingContactNo);
  const [shippingStatus, setShippingStatus] = useState(item.shippingStatus);

  const updateShippingAddress = async () => {
    const nft = await axios({
      method: 'post',
      url: `/api/v1/snapback/${item._id}/updateShippingAddress`,
      data: {
        shippingAddress,
        shippingName,
        shippingEmail,
        shippingContactNo,
      },
    })
    if(nft.data) {
      // console.log(nft.data);
      back()
      return;
    }
  }

  const updateShippingStatus = async () => {
    const nft = await axios({
      method: 'post',
      url: `/api/v1/snapback/${item._id}/updateShippingStatus`,
      data: {
        shippingStatus,
      },
    })
    if(nft.data) {
      // console.log(nft.data);
      back()
      return;
    }
  }

  return (
    <div className='mint_collabs_main'>
      <div className='mint_collabs_img'>
        <div className='mint_collabs_img_iner'  style={{ overflow: "hidden" }}>
          <video controls={false} autoPlay={true} loop={true} muted={true} style={{ height: "100%"}}>
            <source
              src={item.video}
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
          {/* <a href='#'>
            <img src={img} alt='' />
          </a> */}
        </div>
        <h4>{title}</h4>
      </div>
      <div className='mint_collabs_details'>
        <div className='burned_nft_field'>
          <label>Full Name</label>
          <input value={shippingName} disabled={type !== 'shippingAddress'} onChange={({ target }) => setShippingName(target.value)}  />
        </div>
        <div className='burned_nft_field'>
          <label>Physical address</label>
          <textarea value={shippingAddress} disabled={type !== 'shippingAddress'} onChange={({ target }) => setShippingAddress(target.value)}  />
        </div>
        <div className='burned_nft_field'>
          <label>Email Address</label>
          <input value={shippingEmail} disabled={type !== 'shippingAddress'} onChange={({ target }) => setShippingEmail(target.value)}  />
        </div>
        <div className='burned_nft_field'>
          <label>Contact No</label>
          <input value={shippingContactNo} disabled={type !== 'shippingAddress'} onChange={({ target }) => setShippingContactNo(target.value)}  />
        </div>
        <div className='burned_nfts_botm'>
          {type === 'shippingAddress' ? (
            <div className='burned_nft_btn'>
              <input type='button' onClick={back} value='Back' />
            </div>
          ) : (
            <div className='burned_nft_field'>
              <label>Shipping Status</label>
              <div className='burned_nft_custom_select'>
                <select value={shippingStatus} onChange={({ target }) => setShippingStatus(target.value)}>
                  <option value={`PENDING`}>Pending</option>
                  <option value={`PROCESSING`}>Processing</option>
                  <option value={`SHIPPED`}>Shipped</option>
                  <option value={`DELIVERED`}>Delivered</option>
                </select>
              </div>
            </div>
          )}
          {type === 'shippingAddress' ? (
            <div className='burned_nft_btn'>
              <input type='submit' onClick={updateShippingAddress} value='Update' />
            </div>
          ) : (
            <div className='burned_nft_btn'>
              <input type='submit' onClick={updateShippingStatus} value='Update' />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BurnedNft;
