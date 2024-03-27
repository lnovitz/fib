'use client'

import { useSearchParams } from 'next/navigation'
import { callFib } from '../api/submit/route';

export default function Page() {
    const searchParams = useSearchParams();
    const input = parseInt(searchParams.get('name') as string);
    const sequence = callFib(input).toString()
    return <div>{sequence}</div>
}