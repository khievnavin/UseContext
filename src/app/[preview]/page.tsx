'use client'
import React from 'react'
import { useParams } from 'next/navigation'
const Page = () => {
    const route= useParams()
  return (
    <div>
      <h1>The User Name is: {route.preview} </h1>
    </div>
  )
}

export default Page
