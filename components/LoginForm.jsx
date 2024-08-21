import React from 'react'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary-blue">Welcome back!</h1>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-blue">Email</label>
          <input type="email" id="email" name="email" required 
                 className="mt-1 block w-full px-3 py-2 border border-primary-blue rounded-md shadow-sm text-sm text-primary-blue focus:outline-none focus:ring-primary-blue focus:border-primary-blue" />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-primary-blue">Password</label>
          <input type="password" id="password" name="password" required 
                 className="mt-1 block w-full px-3 py-2 border border-primary-blue rounded-md shadow-sm text-sm text-primary-blue focus:outline-none focus:ring-primary-blue focus:border-primary-blue" />
        </div>
        
        <div className="text-right">
          <Link href="/forgot-password" className="text-sm text-primary-blue hover:underline">
            Forgotten password?
          </Link>
        </div>
        
        <button type="submit" className="w-full py-2 px-4 inline-block bg-shiba-yellow text-white font-bold rounded-lg border-2 border-shiba-yellow hover:bg-white hover:text-shiba-yellow transition duration-300">
          Login
        </button>
      </form>
      
      <div className="mt-6">
        <button className="w-full py-2 px-4 inline-block rounded-lg border-2 bg-white hover:bg-shiba-yellow hover:text-white hover:border-shiba-yellow transition duration-300">
          Login with Google
        </button>
      </div>
      
      <p className="mt-6 text-center text-sm text-primary-blue">
        Don't have an account? 
        <Link href="/signup" className="font-medium text-primary-blue hover:underline ml-1">
          Sign up for free
        </Link>
      </p>
    </div>
  )
}

export default LoginForm