// src/components/Main.js
import React from 'react';

const Main = ({ children }) => {
  return (
    <main className='flex-1 p-6 bg-gray-200'>
      {children}
    </main>
  );
};

export default Main;