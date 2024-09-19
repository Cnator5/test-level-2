'use client';
import Link from 'next/link';
import React from 'react';

const ChatButton = () => {
  const openChat = () => {
    // This function should open your chat widget
    // The exact implementation will depend on your chat service
    if (window.openChatWidget) {
      window.openChatWidget();
    } else {
      console.log('Chat widget not available');
      // You might want to fallback to opening a contact form or showing a phone number
    }
  };

  return (
    <Link href="/contact"> 
    <button 
      onClick={openChat}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 w-full flex items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
      </svg>
      Chat with Us
    </button>
    </Link>
  );
};

export default ChatButton;