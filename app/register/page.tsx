'use client'
import React from 'react'
import axios from 'axios'
import { Button, Input, Textarea } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

type RegisterForm = {
  email: string
  password: string
  description: string
}

const Register = () => {
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<RegisterForm>()

  const handleRegister = async (data: RegisterForm) => {
    try {
      const res = axios.post('/api/issue', data)
      console.log('success')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex justify-center'>
      <form
        className='w-1/2 flex flex-col gap-y-5 my-8'
        onSubmit={handleSubmit(handleRegister)}
      >
        <Input
          type='email'
          label='Email'
          placeholder='Enter your email'
          {...register('email')}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Enter your password'
          {...register('password')}
        />
        <Textarea
          placeholder='Enter your description'
          {...register('description')}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default Register
