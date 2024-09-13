import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <Link to='/' className="text-2xl font-bold text-indigo-600">ASSR</Link>
          <div>
            <Link to="/signin" className="text-gray-600 mx-4">Login</Link>
            {/* <a href="#login" className="text-gray-600 mx-4">Login</a> */}
            <a href="#signup" className="bg-indigo-600 text-white px-4 py-2 rounded">Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
