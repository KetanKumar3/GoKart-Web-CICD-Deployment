import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [fullname, setFullname] = useState("");
  const [product, setProduct] = useState(false);

  const [addelement, setAddElement] = useState({
    image: null,
    name: "",
    description: "",
    price: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("adminToken");
      if (!token) navigate("/admin/login");
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setAddElement({ ...addelement, image: files[0] });
    } else {
      setAddElement({ ...addelement, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !addelement.image ||
      !addelement.name ||
      !addelement.description ||
      !addelement.price
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("image", addelement.image);
    formData.append("name", addelement.name);
    formData.append("description", addelement.description);
    formData.append("price", addelement.price);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/product/add`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.msg);
      } else {
        toast.success("Product Added Successfully!");

        setAddElement({
          image: null,
          name: "",
          description: "",
          price: "",
        });
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    if (!fullname) {
      toast.error("Enter product name");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/product/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullname }),
      });

      const data = await response.json();

      if (!data.success) {
        toast.error(data.msg);
      } else {
        toast.success("Product Deleted!");
        setFullname("");
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-start px-4 py-10 bg-gray-100">

      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
        
        
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => setProduct(false)}
            className={`text-xl font-semibold transition-all ${
              !product ? "text-blue-600" : "text-gray-500"
            }`}
          >
            Add Product
          </button>

          <button
            onClick={() => setProduct(true)}
            className={`text-xl font-semibold transition-all ${
              product ? "text-blue-600" : "text-gray-500"
            }`}
          >
            Delete Product
          </button>
        </div>

        
        {!product && (
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block font-medium mb-1">Upload Product Image</label>
              <input
                name="image"
                onChange={handleChange}
                type="file"
                className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Product Name</label>
              <input
                name="name"
                value={addelement.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter product name"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Product Description</label>
              <input
                name="description"
                value={addelement.description}
                onChange={handleChange}
                type="text"
                placeholder="Enter description"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Price</label>
              <input
                name="price"
                value={addelement.price}
                onChange={handleChange}
                type="text"
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 font-semibold"
            >
              Add Product
            </button>
          </form>
        )}

        
        {product && (
          <form onSubmit={handleDeleteSubmit} className="space-y-5">

            <div>
              <label className="block font-medium mb-1">Product Name</label>
              <input
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                placeholder="Enter product name"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 font-semibold"
            >
              Delete Product
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

export default Dashboard;
