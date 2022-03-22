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

  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Invalid request type' })
    return
  }

  if(req.method === 'POST') {
    const nft = await Nft.buy(id, req.body.from, req.body.to);
    if(nft)
      res.json(nft)
    else
      res.status(404).send()
  }

}
