import mongoose from '../util/mongoose';
import uniqueValidator from 'mongoose-unique-validator';
// mongoose.set('useCreateIndex', true);


let nftSchema = new mongoose.Schema({
  tokenUri: { type: String, trim: true, unique: true, required: 'Token Uri is required' },
  itemId: { type: String, trim: true, required: 'Item Id is required' },
  ipfsPath: { type: String, trim: true, required: 'IPFS path is required' },
  title: { type: String, trim: true, required: 'Name is required' },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist' },
  col: { type: String, enum: ['Games', 'Art', 'Trading Cards', 'Memes', 'Collectibles'], default: 'Art' },
  price: { type: Number, trim: true, default: 0.00 },
  sold: { type: Boolean, default: false },
  description: { type: String, trim: true, default: '' },
  createdAt: { type: Date, default: Date.now }
});

nftSchema.plugin(uniqueValidator);
let _Nft = mongoose.model('Nft', nftSchema);


let artistSchema = new mongoose.Schema({
  address: { type: String, trim: true, unique: true, required: 'Account address is required' },
  email: { type: String, lowercase: true, unique: true, trim: true, required: 'Email address is required' },
  name: { type: String, trim: true, required: 'Name is required' },
  nfts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Nft' }],
  creations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Nft' }],
  facebook: { type: String, trim: true, default: '' },
  twitter: { type: String, trim: true, default: '' },
  bio: { type: String, trim: true, default: '' },
  createdAt: { type: Date, default: Date.now }
});

artistSchema.plugin(uniqueValidator);
let _Artist = mongoose.model('Artist', artistSchema);


export const Artist = {
  create: async (data) => {
    let newObj = new _Artist(data);
    return await newObj.save();
  },
  update: async (id, data) => {
    let entries = Object.keys(data)
    let updates = {}

    // constructing dynamic query
    for (let i = 0; i < entries.length; i++) {
      updates[entries[i]] = Object.values(data)[i]
    }

    return _Artist.updateOne({ _id: id }, { $set: updates });
  },
  find: async (fQ = {}) => await _Artist.find(fQ).populate('nfts creations'),
  findByEmail: async (email) => await _Artist.findOne({ emailAddress: email }).populate('nfts creations'),
  findByAddress: async (address) => await _Artist.findOne({ address }).populate('nfts creations'),
  findById: async (id) => await _Artist.findById(id).populate('nfts creations'),
  getNfts: async (id) => await _Artist.findById(id).select('nfts').populate('nfts'),
  getCreations: async (id) => await _Artist.findById(id).select('creations').populate('creations'),
  pushNewNft: async (id, nftObj) => {
    let artistObj = await _Artist.findById(id);
    await _Artist.updateOne({ _id: id }, { $set: { nfts: [...artistObj.nfts, nftObj ] } })
    artistObj = await _Artist.findById(id);
    return artistObj;
  },
  pushNewCreation: async (id, nftObj) => {
    let artistObj = await _Artist.findById(id);
    await _Artist.updateOne({ _id: id }, { $set: { creations: [...artistObj.creations, nftObj ] } })
    artistObj = await _Artist.findById(id);
    return artistObj;
  }
}

export const Nft = {
  create: async (data) => {
    let newObj = new _Nft(data);
    return await newObj.save();
  },
  find: async (fQ = {}) => await _Nft.find(fQ).populate('artist owner'),
  findByArtist: async (artist) => await _Nft.find({ artist }).populate('artist owner'),
  findByOwner: async (owner) => await _Nft.find({ owner }).populate('artist owner'),
  findByCollection: async (collection) => await _Nft.find({ collection }).populate('artist owner'),
  findByTokenUri: async (tokenUri) => await _Nft.findOne({ tokenUri }).populate('artist owner'),
  findByItemId: async (itemId) => await _Nft.findOne({ itemId }).populate('artist owner'),
  findByIpfsPath: async (ipfsPath) => await _Nft.findOne({ ipfsPath }).populate('artist owner'),
  findById: async (id) => await _Nft.findById(id).populate('artist owner'),
  setOwner: async (id, owner) => {
    let nftObj = await _Nft.findById(id);
    nftObj.owner = owner;
    return nftObj.save();
  },
  setSold: async (id) => {
    let nftObj = await _Nft.findById(id);
    nftObj.sold = true;
    return nftObj.save();
  },
  buy: async (id, from, to) => {
    await _Nft.updateOne({ _id: id }, { $set: { sold: true, owner: to } })
    let nftObj = await _Nft.findById(id);
    // console.log(nftObj);
    let fromObj = await _Artist.findById(from);
    // console.log(fromObj.nfts, fromObj.nfts.filter(_n => String(_n) !== id), nftObj);
    await _Artist.updateOne({ _id: from }, { $set: { nfts: fromObj.nfts.filter(_n => String(_n) !== id) } })
    // console.log(fromObj);
    let toObj = await _Artist.findById(to);
    await _Artist.updateOne({ _id: to }, { $set: { nfts: [...toObj.nfts, nftObj ] } })
    // console.log(toObj);
    return { buy: true };
  },

}

// [ new ObjectId("619ccdd82d5c3ab5bd17734e") ] [ new ObjectId("619ccdd82d5c3ab5bd17734e") ]