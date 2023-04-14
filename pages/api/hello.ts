// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export const config = {
  runtime: 'edge',
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Response(JSON.stringify({
    name: 'qqq'
  }), {
    status: 500,
    statusText: 'have error'
  })
}
