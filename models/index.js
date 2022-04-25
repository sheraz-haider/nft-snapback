import mongoose from '../util/mongoose';
import uniqueValidator from 'mongoose-unique-validator';
// mongoose.set('useCreateIndex', true);

let snapbackSchema = new mongoose.Schema({
  id: { type: Number, required: 'ID is required' },
  name: { type: String, trim: true, required: 'Name is required' },
  description: { type: String },
  image: { type: String, trim: true },
  video: { type: String, trim: true },
  owner: { type: String, trim: true, required: 'Owner is required' },
  burnt: { type: Boolean, default: false },
  shippingAddress: { type: String, trim: true, default: '' },
  shippingName: { type: String, trim: true, default: '' },
  shippingEmail: { type: String, trim: true, default: '' },
  shippingContactNo: { type: String, trim: true, default: '' },
  shippingStatus: { type: String, trim: true, default: 'PENDING' },
  createdAt: { type: Date, default: Date.now }
});

snapbackSchema.plugin(uniqueValidator);
let _Snapback = mongoose.model('Snapback', snapbackSchema);

export const Snapback = {
  create: async (data) => {
    let newObj = new _Snapback(data);
    return await newObj.save();
  },
  find: async (fQ = {}) => await _Snapback.find(fQ),
  findByOwner: async (owner) => await _Snapback.find({ owner }),
  findById: async (id) => await _Snapback.findById(id),
  setOwner: async (id, owner) => {
    let snapbackObj = await _Snapback.findById(id);
    snapbackObj.owner = owner;
    return snapbackObj.save();
  },
  setShippingStatus: async (id, shippingStatus) => {
    let snapbackObj = await _Snapback.findById(id);
    snapbackObj.shippingStatus = shippingStatus;
    return snapbackObj.save();
  },
  setShippingAddress: async (id, shippingAddress, shippingName, shippingEmail, shippingContactNo) => {
    let snapbackObj = await _Snapback.findById(id);
    snapbackObj.shippingAddress = shippingAddress;
    snapbackObj.shippingName = shippingName;
    snapbackObj.shippingEmail = shippingEmail;
    snapbackObj.shippingContactNo = shippingContactNo;
    return snapbackObj.save();
  },
  setBurnt: async (id) => {
    let snapbackObj = await _Snapback.findById(id);
    snapbackObj.burnt = true;
    return snapbackObj.save();
  },
}

// [ new ObjectId("619ccdd82d5c3ab5bd17734e") ] [ new ObjectId("619ccdd82d5c3ab5bd17734e") ]