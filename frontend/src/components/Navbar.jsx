import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { Menu, X, BrainCircuit } from 'lucide-react'

const Navbar = () => {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  
  const [mobileDrawerOpen,setMobileDrawerOpen]= useState(false);

  const toggleNavbar =()=>{
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
      
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto text-sm relative">
          <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0'>
              <BrainCircuit className=' h-10 w-16'/>
              <Link to='/' className="text-2xl font-bold">ARSS</Link>
            </div> 
            <ul className=' hidden lg:flex ml-96 space-x-12'>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="https://www.overleaf.com/">Build Resume</a>
              </li>
            </ul>
            <div className=' hidden lg:flex justify-center items-center'>
              {!isAuthenticated ? (
              <button className="border border-black bg-gradient-to-r from-amber-800 to-amber-600 px-4 py-2 rounded text-white" onClick={() => loginWithRedirect()}>Log In</button>
              ):<button className="border border-black bg-gradient-to-r from-amber-800 to-amber-600 px-4 py-2 rounded text-white" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
              </button>}
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen? <X/>: <Menu/>}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
              <div className=" fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
              <li className=' py-4'>
                <a href="#">Features</a>
              </li>
              <li className=' py-4'>
                <a href="#">How it works</a>
              </li>
              <li className=' py-4'>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="https://www.overleaf.com/">Build Resume</a>
              </li>
            </ul>
                <div className=' flex space-x-6'>
                {!isAuthenticated ? (
              <button className="border border-black bg-gradient-to-r from-amber-800 to-amber-600 px-4 py-2 rounded text-white" onClick={() => loginWithRedirect()}>Log In</button>
              ):<button className="border border-black bg-gradient-to-r from-amber-800 to-amber-600 px-4 py-2 rounded text-white" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
              </button>}
          </div>
              </div>
            )}
        </div>
      </nav>
  )
}

export default Navbar
