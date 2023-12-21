'use client'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Dashboard from './components/Dashboard'
import { useState } from 'react'

export default function Home() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsClicked(!isClicked)}>Open dialog</Button>
      {isClicked && <Dashboard />}
    </div>
  )
}
