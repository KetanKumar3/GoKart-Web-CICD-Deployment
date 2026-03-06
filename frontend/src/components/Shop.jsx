import React, { useEffect, useState } from "react";
import Card from "./Card";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/shop`);
    const data = await response.json();
    setProducts(data.product);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="w-full px-4 md:px-6 lg:px-20 xl:px-30 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        All Products
      </h2>

      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 md:gap-8"
      >
        {products.map((item, i) => (
          <Card
            key={i}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
