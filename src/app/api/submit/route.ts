//"use server";

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  return Response.json({ name })
}