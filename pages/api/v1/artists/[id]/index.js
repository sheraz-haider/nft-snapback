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

  if (req.method !== 'GET' && req.method !== 'PATCH') {
    res.status(400).send({ message: 'Invalid request type' })
    return
  }

  if(req.method === 'GET') {
    const artist = await Artist.findById(id);
    if(artist)
      res.json(artist)
    else
      res.status(404).send()
  }

  if(req.method === 'PATCH') {
    const artist = await Artist.update(id, req.body);
    if(artist)
      res.json(artist)
    else
      res.status(404).send()
  }

}
