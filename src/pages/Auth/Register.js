import { Link } from "react-router-dom";

const Register = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white p-4">
        <div className="bg-gray-200 shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-black mb-6">Create Your Account</h2>
  
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-black font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 mt-1 border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            {/* Email */}
            <div>
              <label className="text-black font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mt-1 border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            {/* Password */}
            <div>
              <label className="text-black font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 mt-1 border border-white rounded-md text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
  
            {/* Role Dropdown */}
            <div>
              <label className="text-black font-medium">Role</label>
              <select
                className="w-full p-3 mt-1 border border-white rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="employee">Employee</option>
                <option value="manager">Manager</option>
              </select>
            </div>
  
            {/* Submit Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition">
              Sign Up
            </button>
          </form>
  
          {/* Login Link */}
          <p className="text-center text-black mt-4">
            Already have an account?{" "}
            <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default Register;
  