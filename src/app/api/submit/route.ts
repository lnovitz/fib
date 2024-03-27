export function getFib(n: Number, arr: Array<Number>) {
  // The Fibonacci sequence of numbers “Fn” is defined using 
  // the recursive relation with the seed values F0=0 and F1=1: 
  // Fn = Fn-1+Fn-2
  // https://byjus.com/maths/fibonacci-sequence
  if (n == 0) return 0; 
  if (n == 1) return 1;
  return (Number(arr[arr.length - 2]) + Number(arr[arr.length - 1]) );
}

export function callFib(n: Number) {
  let sequence = new Array;
  for (let i = 0; i < Number(n) + 1; i++) {
    sequence.push(getFib(i, sequence));
  }
  return sequence
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const value = parseInt(formData.get('fibN') as string)

  if (!value) return Response.json({"response":"404"})
  
  let sequence = callFib(value);
  return Response.json({ sequence })
}