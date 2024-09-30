import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPassword = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100 overflow-hidden relative p-4">
            <div className="flex w-full max-w-4xl flex-col md:flex-row">
                {/* Logo Section for small screens */}
                <div className="flex md:hidden w-full items-center justify-center mb-4">
                    <img src="../src/assets/brand-logo-transperent.png" alt="Brand Logo" className="w-1/2" />
                </div>

                {/* Registration Form Section */}
                <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                    {/* Name Field */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your name</label>
                        <div className="relative mt-1">
                            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                id="name"
                                required
                                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email</label>
                        <div className="relative mt-1">
                            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                required
                                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative mt-1">
                            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                required
                                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FontAwesomeIcon
                                icon={faEye}
                                className={`absolute right-3 top-3 cursor-pointer ${passwordVisible ? 'text-[rgb(255,121,44)]' : 'text-gray-400'}`}
                                onClick={togglePassword}
                            />
                        </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <div className="relative mt-1">
                            <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                id="confirmPassword"
                                required
                                className="pl-10 py-2 border border-gray-300 rounded-md w-full"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <FontAwesomeIcon
                                icon={faEye}
                                className={`absolute right-3 top-3 cursor-pointer ${confirmPasswordVisible ? 'text-[rgb(255,121,44)]' : 'text-gray-400'}`}
                                onClick={toggleConfirmPassword}
                            />
                        </div>
                    </div>

                    {/* Register Button */}
                    <button className="bg-[rgb(255,102,0)] text-white hover:text-[rgb(58,59,59)] py-2 rounded-md w-full font-medium hover:bg-[rgb(255,121,44)]">
                        Register
                    </button>

                    {/* Link to Login */}
                    <p className="mt-4 text-center text-sm">Already have an account? <Link to="/login" className="text-[rgb(255,102,0)] font-medium hover:underline">Login now</Link></p>
                </div>

                {/* Logo Section for larger screens */}
                <div className="hidden md:flex w-1/2 items-center justify-center">
                    <img src="../src/assets/brand-logo-transperent.png" alt="Brand Logo" />
                </div>
            </div>

            <div className='hidden md:block absolute w-[40vw] h-[40vw] bg-[rgb(255,102,0)] rounded-full -right-[15%] -top-[30%]'></div>
        </div>
    );
};

export default Register;
