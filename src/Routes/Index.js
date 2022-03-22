import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Index from '../pages/index/Index';
import OwnedNfts from '../pages/owned_nfts/OwnedNfts';
import MintNfts from '../pages/mint_nfts/MintNfts';
import BurnedNfts from '../pages/burned_nfts/BurnedNfts';
import ClaimNfts from '../pages/claim_nfts/ClaimNfts';
import CollectedNfts from '../pages/collected_nfts/CollectedNfts';
import UploadNfts from '../pages/upload_nfts/UploadNfts';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/owned-nfts' element={<OwnedNfts />} />
      <Route path='/mint-nfts' element={<MintNfts />} />
      <Route path='/burned-nfts' element={<BurnedNfts />} />
      <Route path='/claim-nfts' element={<ClaimNfts />} />
      <Route path='/collected-nfts' element={<CollectedNfts />} />
      <Route path='/upload-nfts' element={<UploadNfts />} />
    </Routes>
  );
};

export default Router;
