import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div >
 <div className="flex items-center min-h-[50vh] justify-center py-12 px-4 flex-col text-center gap-4 md:gap-8">
      <div className="space-y-2">
        <h1 className="text-6xl font-extrabold tracking-tighter leading-none">404</h1>
        <p className="text-gray-500 mx-auto max-w-[600px]">Sorry, we couldn't find the page you're looking for.</p>
      </div>
      <Link
        className="inline-flex h-10 items-center rounded-md border transition duration-300 ease-in-out delay-200 border-gray-200  bg-white shadow-sm px-8 text-sm font-medium  hover:bg-gray-800 hover:text-gray-200"
        
        to="/"
      >
        Return to Home
      </Link>
    </div>
    </div>
  )
}

export default NotFound