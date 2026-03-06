import React, { useEffect, useState } from 'react';
import Card from './Card';
import { NavLink } from 'react-router-dom';

const BestSelling = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/shop`);
    const data = await response.json();
    const filterData = data.product.slice(0, 8);
    setProducts(filterData);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <h2 className="text-center text-3xl font-bold mb-10">
        Best Selling
      </h2>

      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6 
        sm:gap-8
      ">
        {products.map((item, i) => (
          <Card
            key={i}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            labels="Home"
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
