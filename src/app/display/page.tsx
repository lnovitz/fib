'use client'

import { useSearchParams } from 'next/navigation'
import { callFib } from '../utils/fib_utils';
import { Suspense } from 'react'

// https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
function Search() {
    // here you look up cache and if not there, callFib
    const searchParams = useSearchParams()
    const input = parseInt(searchParams.get('name') as string);
    const sequence = callFib(input).toString()
   
    return <div className="flex min-h-screen flex-col items-center justify-between p-24">{sequence}</div>
  }

export default function Page() {
    return (<Suspense><Search/></Suspense>)
}