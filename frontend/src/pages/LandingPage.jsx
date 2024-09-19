import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Heroimg from '../assets/HeroImg.jpg'

const LandingPage = () => {

  const {isAuthenticated, user,loginWithRedirect} = useAuth0();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-tr from-amber-600 to-amber-900">

      {/* Hero Section */}
      <div className='flex h-screen justify-center items-center'>

      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className=' text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide text-center text-white'>
          Optimize your resume to get more interviews
        </h1>
        <p className=' mt-10 text-lg text-center text-neutral-900 max-w-4xl'>
          Our system helps you optimize your resume for any job,highlighting the key skills required.
        </p>
        <div className="flex justify-center my-10">
        {!isAuthenticated ? (
              <button className="border border-black bg-gradient-to-r from-amber-800 to-amber-600 px-4 py-2 rounded text-white " onClick={() => loginWithRedirect()}>Log in</button>
              ):<Link className=" border border-black bg-gradient-to-r from-amber-800 to-amber-600 px-4 py-2 rounded-lg text-white" to='/Profile'>
              Get Started
              </Link>}
        </div>
      </div>
      <img className=' border rounded-3xl w-2/3 ml-2 -mr-10 my-10' src={Heroimg} alt="heroimage" />
      </div>


      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-gray-700 mb-4">AI-Powered Insights</h3>
              <p className="text-gray-600">Our AI analyzes your resume and provides actionable insights to improve your chances of landing a job.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-gray-700 mb-4">ATS Optimization</h3>
              <p className="text-gray-600">Ensure your resume passes through Applicant Tracking Systems (ATS) with ease.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-gray-700 mb-4">Real-Time Scanning</h3>
              <p className="text-gray-600">Get real-time feedback as you upload and modify your resume.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-gray-700 mb-4">1. Upload Resume</h3>
              <p className="text-gray-600">Drag and drop your resume or upload a file to start the scanning process.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-gray-700 mb-4">2. Instant Feedback</h3>
              <p className="text-gray-600">Receive detailed feedback on key areas to improve, from formatting to keywords.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-xl font-bold text-gray-700 mb-4">3. Download and Apply</h3>
              <p className="text-gray-600">Download your optimized resume and start applying to jobs with confidence.</p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default LandingPage;
