import { Artist } from '../../../../models'
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
    // console.log(req.body);
    console.log(req.query);
    const artists = await Artist.find();
    res.json(artists)
    return
  }

  if(req.method === 'POST') {
    const artist = await Artist.create(req.body);
    res.json(artist)
    return
  }


}
