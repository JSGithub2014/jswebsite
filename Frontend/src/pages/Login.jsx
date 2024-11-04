import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import BrandLogo from '../assets/brand-logo-transperent.png';
import { UserContext } from '../Context/UserContext'; 

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext); // Get setUser from context

    const togglePassword = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = process.env.NODE_ENV === 'production'
            ? 'https://jswebsite-ocj7.vercel.app/api/auth/login'
            : 'http://localhost:3000/api/auth/login';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // Include this line to send cookies
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.message || 'Failed to login'; // Get error message from server
                toast.error(`Login failed: ${errorMessage}`); // Use Toastify for error message
                return; // Exit if there was an error
            }

            const data = await response.json();
            console.log(data);
            setUser(data.user); // Set user in context
            toast.success('Login successful!'); // Success message
            navigate('/'); // Redirect to home after login
        } catch (error) {
            console.error(error);
            toast.error(`Login failed: ${error.message}`); // Use Toastify for error message
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
                        className="inline-block mb-4 text-sm text-center text-[rgb(255,102,0)] font-medium hover:underline transition-transform duration-300 transform hover:scale-105"
                    >
                        &larr; Back to Home
                    </Link>

                    <h2 className="text-3xl font-bold mb-6 text-center heading-font tracking-wider">Login</h2>

                    <form onSubmit={handleSubmit}>
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
                                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                                />
                            </div>
                        </div>

                        <button type="submit" className="bg-[rgb(255,102,0)] text-white hover:text-[rgb(58,59,59)] py-2 rounded-md w-full font-medium hover:bg-[rgb(255,121,44)] transition duration-300 transform hover:scale-105">
                            Login Now
                        </button>
                    </form>

                    <p className="mt-4 text-center text-sm">
                        Don't have an account? 
                        <Link to="/signup" className="text-[rgb(255,102,0)] font-medium hover:underline"> Sign Up</Link>
                    </p>
                </div>

                <div className="hidden md:flex w-1/2 items-center justify-center">
                    <img src={BrandLogo} alt="Brand Logo" />
                </div>
            </div>

            <div className='hidden md:block absolute w-[40vw] h-[40vw] bg-[rgb(255,102,0)] rounded-full -right-[15%] -top-[30%]'></div>
        </div>
    );
};

export default Login;
