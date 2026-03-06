import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("userToken");

  const fetchProfile = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/profile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      setName(data.name);
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-xl text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">User Profile</h1>

        <p className="text-lg sm:text-xl font-medium">
          Hey <span className="text-gray-600">{name}</span>, how are you?
        </p>

        <p className="text-base sm:text-lg font-medium text-gray-700">
          Thank you for visiting our website.
        </p>

        <NavLink to="/">
          <span className="text-blue-600 font-semibold hover:underline pt-3 block">
            Go to Home Page
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default UserProfile;
