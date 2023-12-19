import React from 'react'
import { Button, Input, Textarea } from '@nextui-org/react'

const Register = () => {
  return (
    <div className='flex justify-center'>
      <form className='w-1/2 flex flex-col gap-y-5 my-8'>
        <Input type='email' label='Email' placeholder='Enter your email' />
        <Input
          type='password'
          label='Password'
          placeholder='Enter your password'
        />
        <Textarea placeholder='Enter your description' />
        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default Register
