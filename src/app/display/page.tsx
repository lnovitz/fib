'use client'

import { useSearchParams } from 'next/navigation'
import { callFib } from '../utils/fib_utils';
import { Suspense } from 'react'

export default function Page() {
    const searchParams = useSearchParams();
    const input = parseInt(searchParams.get('name') as string);
    const sequence = callFib(input).toString()
    // here you look up cache and if not there, callFib
    return (<Suspense><div className="flex min-h-screen flex-col items-center justify-between p-24">{sequence}</div></Suspense>)
}