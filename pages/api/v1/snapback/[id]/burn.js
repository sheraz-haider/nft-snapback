import { Snapback } from '../../../../../models'
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
    const snapback = await Snapback.setBurnt(id);
    if(snapback)
      res.json(snapback)
    else
      res.status(404).send()
  }

}
