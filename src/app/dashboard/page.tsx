'use client';

import { FormEvent } from 'react'
import { useRouter, usePathname } from 'next/navigation'


export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
     const data = await response.json()
     if (data) {
      //history.pushState({ email: "example@example.com" }, "", pathname + "/display");
      router.push("/display");
     }
     // heres where we want to display the numbers
  }
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
      <form className="w-full max-w-sm" onSubmit={onSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
          type="number" placeholder="9" aria-label="Number" name="fibN"/>
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
            Submit
          </button>
        </div>
      </form>
    </main>

    
  )
}