import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="
        w-full max-w-md p-8 rounded-3xl shadow-2xl 
        bg-white/70 backdrop-blur-xl border border-gray-200
      ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Your Account 🎉
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input 
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input 
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input 
            type="password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="Create a password"
          />
        </div>

        {/* Submit */}
        <button className="
          w-full py-3 mt-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-primary to-primaryDark
          hover:shadow-xl transition-all
        ">
          Sign Up
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary font-semibold">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
