import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ShopDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async () => {
    const res = await fetch(`http://localhost:3000/shop/${id}`);
    const data = await res.json();
    setProduct(data.product);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  if (!product)
    return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <>
      <Navbar />

      <div className="w-full px-4 md:px-6 lg:px-20 py-10">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-6 md:p-10">

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">

            <div className="flex justify-center md:justify-start">
              <img
                src={`http://localhost:3000/uploads/${product.image}`}
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain rounded-lg shadow"
                alt={product.name}
              />
            </div>

            
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                {product.name}
              </h1>

              <p className="text-xl sm:text-2xl font-semibold mb-6">
                ₹ {product.price}
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {product.description || "No description available."}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDescription;
