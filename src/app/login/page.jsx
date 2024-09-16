"use client";

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';

const Login = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-blue-900 p-8 rounded-xl shadow-lg text-center w-[60%]">
        <Image 
          src="/images/Modrino-removebg-preview 1.png" 
          alt="App Logo" 
          width={200} 
          height={200} 
          className="mx-auto mb-6"
        />
        {session ? (
          <>
            <p className="text-white text-lg mb-6">Logged in as {session.user.email}</p>
            <button
              className="bg-white text-black px-10 py-3 rounded-xl font-bold hover:bg-blue-800 transition duration-300"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <button
            onClick={() => signIn('google')}
            className="bg-white text-black px-10 py-3 rounded-xl font-bold hover:bg-blue-800 transition duration-300"
          >
            Login with Google
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;