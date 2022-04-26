import { Token } from '../../../../../models'
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

  if (req.method !== 'GET') {
    res.status(400).send({ message: 'Invalid request type' })
    return
  }

  if(req.method === 'GET') {
    const token = await Token.findById(id);
    if(token)
      res.json(token)
    else
      res.status(404).send()
  }

}
