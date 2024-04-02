import { callFib } from '../utils/fib_utils'

export async function POST(request: Request) {
  const formData = await request.formData()
  const value = parseInt(formData.get('fibN') as string)

  if (!value) return Response.json({"response":"404"})
  
  let sequence = callFib(value);
  return Response.json({ sequence })
}