import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}

export async function POST(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
  ) {
  const data = req.body
  console.log("data");
  //const id = await createItem(data)
  res.status(200).json({ message: 'Hello from Next.js!' })
}