export async function POST(request: Request) {
  const formData = await request.formData()
  const value = formData.get('name')
  return Response.json({ value })
}