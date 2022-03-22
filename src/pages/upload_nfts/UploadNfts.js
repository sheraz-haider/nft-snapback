import React from 'react';
import Header from '../../components/header/Header';
import InnerFooter from '../../components/InnerFooter/InnerFooter';

const UploadNfts = () => {
  return (
    <>
      <Header />
      <div className='inner_hero'>
        <div className='wraper'>
          <h1>Upload NFTs</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className='upload_nfts'>
        <div className='wrapper'>
          <form>
            <div className='upload_nfts_outer'>
              <div className='upload_nfts_form_field'>
                <label>Collection Name</label>
                <input type='text' />
              </div>
              <div className='upload_nfts_form_field'>
                <label>Number of NFTs</label>
                <input type='text' />
              </div>
              <div className='upload_nfts_form_upload'>
                <div className='upload_nfts_form_field'>
                  <label>Upload Image/video:</label>
                  <input type='text' />
                </div>
                <div className='upload_nfts_form_field custom_upload'>
                  <label>
                    Upload
                    <input
                      type='file'
                      accept='image/png, image/gif, image/jpeg'
                    />
                  </label>
                </div>
              </div>
              <div className='upload_nfts_upload_preview'>
                <h3>Preview</h3>
              </div>
              <div className='upload_nfts_form_btn'>
                <input type='submit' value='Continue' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <InnerFooter />
    </>
  );
};

export default UploadNfts;
