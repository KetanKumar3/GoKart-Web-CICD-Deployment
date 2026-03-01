import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const UserSignup = () => {
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev)=>({...prev,[name]:value}))
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/user/signup',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(user),
        credentials:'include'
    })
    
    const data = await response.json()

    if(response.ok){
        console.log("user signup message",data)
        localStorage.setItem("userToken", data.token);
        toast.success(data.message)
        navigate('/')
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-6 py-10 bg-gray-50 h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Signup</h2>


        <div>
          <label className="block font-medium mb-1">Name :</label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter the Name"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div> 

        <div>
          <label className="block font-medium mb-1">Email :</label>
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            type="text"
            placeholder="Enter the Email"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            type="text"
            placeholder="Enter the password"
            className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all font-semibold"
        >
          Submit
        </button>

        <p className="text-center">Have an account? <NavLink to='/user/login'><span className="text-blue-500">Login</span></NavLink></p>
      </form>
    </div>
  );
};

export default UserSignup
