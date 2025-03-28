import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";
import { loginApi } from "../../api/authApi";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin =async  (e) => {
    e.preventDefault();
    const data =  await loginApi(email, password)
    console.log(data, "data");
    if (data?.response_data?.token) {
        localStorage.setItem("token", data.response_data.token);
        dispatch(login(data.response_data.user_data));
        navigate("/home");
    } else {
        console.error("Login failed: No token received");
    }
        
  };
        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
      
              {/* Form */}
              <form className="space-y-4" onSubmit={handleLogin}>
                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
      
                {/* Password */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
      
                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-blue-500" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                </div>
      
                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
              </form>
      
              {/* Divider */}
              <div className="mt-6 text-center text-gray-500">Or sign in with</div>
      
              {/* Social Buttons */}
              <div className="flex justify-center space-x-4 mt-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition">
                  Google
                </button>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition">
                  Facebook
                </button>
              </div>
      
              {/* Sign Up Link */}
              <p className="mt-6 text-center text-gray-600">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        );
      
      
}

export default Login;