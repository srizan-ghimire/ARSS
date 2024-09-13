import React, { useState } from 'react';

const Login = () => {
    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            userType,
            email,
            password,
        });
        // Handle form submission logic here (e.g., API call)
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Login to Resume Scanner
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <span className="text-gray-700">I am a:</span>
                        <div className="flex mt-2 space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="user_type"
                                    value="company"
                                    onChange={() => setUserType('company')}
                                    className="form-radio h-4 w-4 text-blue-600"
                                    required
                                />
                                <span className="ml-2 text-gray-700">Hiring Company</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="user_type"
                                    value="individual"
                                    onChange={() => setUserType('individual')}
                                    className="form-radio h-4 w-4 text-blue-600"
                                    required
                                />
                                <span className="ml-2 text-gray-700">Individual</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            Login
                        </button>
                    </div>

                    <div className="mt-4 text-center">
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot your password?
                        </a>
                    </div>

                    <div className="mt-2 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <a href="signup.html" className="text-blue-600 hover:underline">
                                Sign up
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
