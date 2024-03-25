import { FormEvent } from 'react'
'use client';

export default function Page() {
  console.log("i'mhere");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("knew");

    const formData = new FormData(event.currentTarget)
    console.log("formData ", formData);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}