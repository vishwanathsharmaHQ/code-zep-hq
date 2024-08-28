import { LoginForm } from '@/components/auth/login-form'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="w-full h-screen">
        <div className="mx-auto h-full w-full">
            <LoginForm />
        </div>
    </div>
  )
}

export default Login