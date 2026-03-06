import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UserLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userToken", data.token);
      toast.success(data.message);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-6 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="
          w-full max-w-sm sm:max-w-md 
          bg-white p-6 sm:p-8 
          rounded-2xl shadow-xl 
          space-y-5 sm:space-y-6
        "
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Login
        </h2>

        
        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Email
          </label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        
        <div>
          <label className="block font-medium mb-1 text-sm sm:text-base">
            Password
          </label>
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

       
        <button
          type="submit"
          className="
            w-full py-3 sm:py-3.5 
            bg-black text-white 
            rounded-xl 
            hover:bg-gray-800 
            transition-all font-semibold text-base
          "
        >
          Login
        </button>

        
        <p className="text-center text-sm sm:text-base">
          New here?{" "}
          <NavLink to="/user/signup">
            <span className="text-blue-600 font-medium hover:underline">
              Signup
            </span>
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
