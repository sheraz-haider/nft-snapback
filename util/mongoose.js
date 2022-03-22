import mongoose from 'mongoose';

const connectionString = 'mongodb://127.0.0.1:27017/nft-marketplace';

// todo workaround for HMR. It remove old model before added new ones
Object.keys(mongoose.connection.models).forEach(key => {
  delete mongoose.connection.models[key];
});

mongoose.connect(connectionString, {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

export default mongoose;

// export const connectDbServer = async () => await new Promise((resolve, reject) => {
//   console.log(`Connecting Api server to database: mongodb://127.0.0.1:27017/nft-marketplace...`);
//   let connect = () => {
//     return mongoose.connect('mongodb://127.0.0.1:27017/nft-marketplace', {
//       useNewUrlParser: true,
//     }), mongoose.connection;
//   };
//   connect()
//     .once('connected', () => {
//       console.log(`Database Connected with Api server!`);
//       resolve();
//     })
//     .on('disconnected', connect)
//     .on('error', e => reject(e));
// });
