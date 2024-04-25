"use client"
import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { app } from '../../app/firebaseConfig'; // Import your Firebase configuration

const SendMessage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const db = getFirestore(app)
    try {
      // Store the message in Firestore
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
  
      // Message sent successfully
      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative z-50 flex flex-col items-center justify-center py-20" id="contact">
      <div className="form-container bg-white p-8 rounded-lg shadow-lg">{/* Add a background color and padding */}
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Send us a message
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">{/* Change text color */}
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">{/* Change text color */}
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">{/* Change text color */}
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
