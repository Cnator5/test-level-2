"use client";
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
    const { data: session } = useSession();
    if (session) {
        return (
          <div className='flex justify-center w-full min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 items-center flex-col gap-10'>
            Signed in as {session.user.email} <br />
            <button className="bg-red-400 px-10 py-5 outline-none rounded-xl text-white font-bold"
             onClick={() => signOut()}>Sign out</button>
          </div>
        )
      }
    
  return (
    <div className="flex justify-center w-full min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 items-center">
       <button onClick={()=>signIn('google')} className="bg-cyan-400 px-10 py-5 outline-none rounded-xl text-white font-bold">Login with Google</button>
    </div>
  )
}

export default Login