import React, { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import toast from "react-hot-toast";

const Navbar = () => {
  const [token, setToken] = useState("");
  const [usertoken, setUsertoken] = useState("");
  const [profile, setProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const updateToken = () => setToken(localStorage.getItem("adminToken"));
    updateToken();
    window.addEventListener("storage", updateToken);
    return () => window.removeEventListener("storage", updateToken);
  }, []);

  useEffect(() => {
    const updateUserToken = () => setUsertoken(localStorage.getItem("userToken"));
    updateUserToken();
    window.addEventListener("storage", updateUserToken);
    return () => window.removeEventListener("storage", updateUserToken);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
    toast.success("Admin Logout Successfully");
    navigate("/");
  };

  const handleUserLogin = () => navigate("/user/login");

  const handleUserLogout = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/logout`, {
      method: "POST",
      credentials: "include",
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.removeItem("userToken");
      setUsertoken(false);
      toast.success(data.message);
    }
  };

  return (
    <div className="w-full px-6 py-6 md:px-30 shadow-sm flex justify-between items-center relative">
      <h1 className="text-3xl font-semibold z-50">Go-Kart.</h1>

      <div className="md:hidden text-2xl z-50 absolute right-8" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

     
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40"></div>}
      <div>
      <ul
        className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-10 text-lg fixed md:static top-0 left-0 w-full h-screen md:h-auto bg-white md:bg-transparent px-6 py-20 md:p-0 transition-transform duration-300 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <li className="hover:text-green-600">Home</li>
        </NavLink>

        <NavLink to="/shop" onClick={() => setMenuOpen(false)}>
          <li className="hover:text-green-600">Shop</li>
        </NavLink>

        {token && (
          <li onClick={handleLogout} className="cursor-pointer hover:text-red-600">
            Logout
          </li>
        )}

        <NavLink
          to={token ? "/admin/dashboard" : "/admin/login"}
          onClick={() => setMenuOpen(false)}
        >
          <li className="hover:text-green-600">Admin</li>
        </NavLink>

        <div className="flex items-center bg-gray-100 gap-3 rounded-3xl px-4 py-2 w-full md:w-auto">
          <FaSearch />
          <input
            type="text"
            placeholder="search product"
            className="outline-none bg-transparent w-full"
          />
        </div>

        {usertoken ? (
          <div className="relative">
            <div
              onClick={() => setProfile(!profile)}
              className="cursor-pointer flex items-center"
            >
              <RxAvatar size={36} />
            </div>

            {profile && (
              <div className="absolute bg-white shadow-lg p-3 rounded-md mt-2 w-32 right-0 -z-50">
                <NavLink to="/profile" onClick={() => setMenuOpen(false)}>
                  <p className="hover:bg-gray-100 p-2 rounded">Profile</p>
                </NavLink>
                <p
                  onClick={handleUserLogout}
                  className="hover:bg-gray-100 p-2 rounded cursor-pointer"
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleUserLogin}
            className="px-8 py-2 bg-green-500 text-white rounded-3xl hover:bg-green-600"
          >
            Login
          </button>
        )}
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
