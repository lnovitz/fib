import { FormEvent } from 'react'
'use client';

export default function Page() {
  console.log("i'mhere");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    console.log("beforeprevent");

    event.preventDefault();
    console.log("knew");

    const formData = new FormData(event.currentTarget)
    console.log("formData ", formData);
    //debugger;
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
    console.log("response ", response)
 
    // Handle response if necessary
    //const data = await response.json()
    // ...
  }
 
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}