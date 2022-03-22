import { Artist } from '../../../../../models'
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

  const nfts = await Artist.getNfts(id);
  if(nfts)
    res.json(nfts)
  else
    res.status(404).send()
}
