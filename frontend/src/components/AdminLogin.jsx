import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {
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

    const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("adminToken", data.token);
      toast.success(data.msg);
      navigate("/admin/dashboard");
    } else {
      toast.error(data.msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center">
          Admin Login
        </h2>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter password"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
