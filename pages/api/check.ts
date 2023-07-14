// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  sent: boolean,
  pass: boolean,
  received: boolean,
  proof?: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ sent: false, pass: false, received: false, proof: undefined })
}
