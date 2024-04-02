'use client';

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'


export default function Page() {
  const [fibN, setFibN] = useState('');

  const handleChange = (e) => {
    setFibN(e.target.value);
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   
        <div className="flex items-center border-b border-teal-500 py-2">
          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
          type="number" placeholder="9" aria-label="Number" name="fibN" value={fibN} onChange={handleChange}/>
          <Link className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" href={{
            pathname: '/display',
            query: { name: fibN }
          }}> Submit
            Submit
        </Link>
        </div>
    </main>

    
  )
}