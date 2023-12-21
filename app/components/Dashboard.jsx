import { Button, Table, Textarea } from '@nextui-org/react'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='py-5 flex flex-col gap-y-5'>
      <Textarea placeholder='Reply to comment…' />
      <Button className='w-10'>Reply</Button>
    </div>
  )
}

export default Dashboard
