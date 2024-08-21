import React from 'react'
import Image from 'next/image'
import LoginForm from '../../components/LoginForm'

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      <div className="w-full max-w-6xl bg-gray-200 rounded-lg shadow-lg overflow-hidden my-8">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Login Form */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <LoginForm />
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 relative bg-blue-300 min-h-[400px] md:min-h-[600px]">
            <Image
              src="/assets/shiba_theme.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage