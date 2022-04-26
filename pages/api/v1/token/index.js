import { Token } from '../../../../models'
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
    const tokens = await Token.find(req.body || {});
    res.json(tokens)
    return
  }

  if(req.method === 'POST') {
    const token = await Token.create(req.body);

    res.json(token)
    return
  }


}
