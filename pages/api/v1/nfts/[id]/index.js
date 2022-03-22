import { Nft } from '../../../../../models'
// import { connectDbServer } from '../../../../util/db'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}


export default async (req, res) => {
  const { id } = req.query

  if (req.method !== 'GET' && req.method !== 'PATCH') {
    res.status(400).send({ message: 'Invalid request type' })
    return
  }

  if(req.method === 'GET') {
    const nft = await Nft.findById(id);
    if(nft)
      res.json(nft)
    else
      res.status(404).send()
  }

  if(req.method === 'PATCH') {
    const nft = await Nft.update(id, req.body);
    if(nft)
      res.json(nft)
    else
      res.status(404).send()
  }

}
