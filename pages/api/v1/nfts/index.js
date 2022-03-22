import { Nft, Artist } from '../../../../models'
// import { connectDbServer } from '../../../../util/db'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}


export default async (req, res) => {
  // const { pid } = req.params
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(400).send({ message: 'Invalid request type' })
    return
  }

  if(req.method === 'GET') {
    const nfts = await Nft.find(req.body || {});
    res.json(nfts)
    return
  }

  if(req.method === 'POST') {
    const nft = await Nft.create(req.body);
    await Artist.pushNewNft(req.body.owner, nft)
    await Artist.pushNewCreation(req.body.artist, nft)
    res.json(nft)
    return
  }


}
