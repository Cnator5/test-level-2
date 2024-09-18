"use client";

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Login = () => {
  const { data: session } = useSession();

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center overflow-hidden" 
         style={{ backgroundImage: "url('/images/557454f9d762c6b6c9efdaec66b4dbb9.jpg')" }}>
      <div className="particles"></div>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-900 p-8 rounded-xl shadow-lg text-center w-full max-w-md relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image 
            src="/images/Modrino-removebg-preview 1.png" 
            alt="App Logo" 
            width={300} 
            height={200} 
            className="mx-auto"
          />
        </motion.div>
        {session ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-white text-lg mb-6">Logged in as {session.user.email}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-3 rounded-xl font-bold hover:bg-blue-100 transition duration-300"
              onClick={() => signOut()}
            >
              Sign out
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => signIn('google')}
            className="bg-white text-black px-10 py-3 rounded-xl font-bold hover:bg-blue-100 transition duration-300"
          >
            Login with Google
          </motion.button>
        )}
      </motion.div>
      <style jsx>{`
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .particles::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALElEQVQoU2NkIAIwEqGGAa5o1apV/5EF5OXlGZFtgNuBLAfTBExjdMmhIgkAoFAXLGJvLNIAAAAASUVORK5CYII=") repeat 0 0;
          animation: snow 10s linear infinite;
        }

        .particles::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          bottom: -10px;
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALElEQVQoU2NkIAIwEqGGAa5o1apV/5EF5OXlGZFtgNuBLAfTBExjdMmhIgkAoFAXLGJvLNIAAAAASUVORK5CYII=") repeat 0 0;
          animation: snow 15s linear infinite;
        }

        @keyframes snow {
          0% {
            transform: translate3d(0px, 0px, 0);
          }
          100% {
            transform: translate3d(15px, 100vh, 0px);
          }
        }
      `}</style>
    </div>
  );
}

export default Login;