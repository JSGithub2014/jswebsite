import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faUser, faMars, faVenus, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import BrandLogo from '../assets/brand-logo-transperent.png';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const togglePassword = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPassword = () => setConfirmPasswordVisible(!confirmPasswordVisible);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error('Confirm password does not match. Please try again.'); 
            return;
        }

        if (!gender) {
            toast.error('Please select your gender.'); // Error message if gender is not selected
            return;
        }

        const apiUrl = process.env.NODE_ENV === 'production' 
            ? 'https://jswebsite-ocj7.vercel.app/api/auth/register' 
            : 'http://localhost:3000/api/auth/register';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, gender }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message || 'Registration failed. Please try again.'); // Use error message from API
                return;
            }

            const data = await response.json();
            console.log(data);
            toast.success('Registration successful! Redirecting to login...'); // Success message
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error(error);
            toast.error('Registration failed. Please try again.'); // General error message
        }
    };

    return (
        <div className="flex h-screen justify-center items-center bg-gray-100 overflow-hidden relative p-4">
            <ToastContainer /> {/* Add ToastContainer for displaying toasts */}
            <div className="flex w-full max-w-4xl flex-col md:flex-row">
                <div className="flex md:hidden w-full items-center justify-center mb-4">
                    <img src={BrandLogo} alt="Brand Logo" className="w-1/2" />
                </div>

                <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
                    <Link 
                        to="/" 
                        className="inline-block mb-4 text-xs text-center text-[rgb(255,102,0)] font-medium hover:underline transition-transform duration-300 transform hover:scale-105"
                    >
                        &larr; Back to Home
                    </Link>

                    <h2 className="text-2xl font-bold mb-4 text-center tracking-wider">Register</h2>

                    <form onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="mb-3">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter your name</label>
                            <div className="relative mt-1">
                                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="pl-10 py-1.5 border border-gray-300 rounded-md w-full"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Enter your email</label>
                            <div className="relative mt-1">
                                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="pl-10 py-1.5 border border-gray-300 rounded-md w-full"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Gender Field */}
                        <div className="mb-3">
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <div className="mt-1 flex items-center">
                                <label className="inline-flex items-center mr-4">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={gender === 'male'}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="form-radio"
                                    />
                                    <span className="ml-2 flex items-center">
                                        <FontAwesomeIcon icon={faMars} className="text-[rgb(255,102,0)] mr-1" />
                                        Male
                                    </span>
                                </label>
                                <label className="inline-flex items-center mr-4">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={gender === 'female'}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="form-radio"
                                    />
                                    <span className="ml-2 flex items-center">
                                        <FontAwesomeIcon icon={faVenus} className="text-[rgb(255,102,0)] mr-1" />
                                        Female
                                    </span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="other"
                                        checked={gender === 'other'}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="form-radio"
                                    />
                                    <span className="ml-2 flex items-center">
                                        <FontAwesomeIcon icon={faGenderless} className="text-[rgb(255,102,0)] mr-1" />
                                        Other
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="mb-3">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="relative mt-1">
                                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    required
                                    className="pl-10 py-1.5 border border-gray-300 rounded-md w-full"
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
                        <div className="mb-5">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <div className="relative mt-1">
                                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-3 text-gray-400" />
                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    id="confirmPassword"
                                    required
                                    className="pl-10 py-1.5 border border-gray-300 rounded-md w-full"
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
                        <button type="submit" className="bg-[rgb(255,102,0)] text-white py-2 rounded-md w-full font-medium hover:bg-[rgb(255,121,44)] transition duration-300">
                            Register
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm">Already have an account? <Link to="/login" className="text-[rgb(255,102,0)] font-medium hover:underline">Login now</Link></p>
                </div>

                <div className="hidden md:flex w-1/2 items-center justify-center">
                    <img src={BrandLogo} alt="Brand Logo" />
                </div>
            </div>

            <div className='hidden md:block absolute w-[40vw] h-[40vw] bg-[rgb(255,102,0)] rounded-full -right-[15%] -top-[30%] clip-path-circle'></div>
        </div>
    );
};

export default Register;
