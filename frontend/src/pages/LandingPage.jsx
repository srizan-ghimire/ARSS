import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      

      {/* Hero Section */}
      <header className="flex-grow flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Effortless Resume Scanning for Companies and Applicants</h1>
          <p className="text-lg mb-10">Companies can scan and organize resumes, while individuals can upload their resumes for faster applications.</p>
          <div>
            <Link to="/company-login" className="bg-white text-indigo-600 px-8 py-3 rounded-md mr-4 shadow-md hover:bg-gray-100">For Companies</Link>
            <Link to="/individual-login" className="bg-gray-100 text-white bg-opacity-30 px-8 py-3 rounded-md shadow-md hover:bg-opacity-50">For Individuals</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-700">Why Choose ResumeScanner?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1v4H9l3 3 3-3h-2zM6 18V6a2 2 0 012-2h8a2 2 0 012 2v12m-6 4h2" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Upload & Scan</h3>
              <p className="text-gray-600">Easily upload resumes and scan for relevant skills and qualifications.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2m5-4a3 3 0 016 0" />
              </svg>
              <h3 className="text-xl font-bold mb-2">For Companies</h3>
              <p className="text-gray-600">Companies can manage, filter, and store resumes effortlessly.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 13h18M3 19h18" />
              </svg>
              <h3 className="text-xl font-bold mb-2">For Applicants</h3>
              <p className="text-gray-600">Applicants can upload their resumes for easy access by companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 ResumeScanner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
