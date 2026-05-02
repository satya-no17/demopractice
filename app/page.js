'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {

  const router = useRouter()
  return (
    <div>
      <p>      home page isme acha sa ui ek acha dialoge ho aur ek button next page me jane k liye </p>
      <button onClick={() => { router.push('/home') }} className='text-4xl'>click me</button>
    </div>
  )
}

export default Home