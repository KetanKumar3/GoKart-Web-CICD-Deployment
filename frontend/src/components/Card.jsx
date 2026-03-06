import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id, image, name, price, labels }) => {
  const linkTo = labels === "Home" ? `shop/${id}` : id;

  return (
    <NavLink to={linkTo}>
      <div className="w-full p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all cursor-pointer bg-white">

        <div className="h-40 sm:h-48 flex justify-center items-center">
          <img
            src={`${import.meta.env.VITE_API_URL}/uploads/${image}`}
            alt={name}
            className="w-24 sm:w-32 md:w-36 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex justify-between items-center mt-3 text-sm sm:text-base">
          <p className="font-medium truncate w-2/3">{name}</p>
          <p className="font-bold whitespace-nowrap">₹{price}</p>
        </div>

      </div>
    </NavLink>
  );
};

export default Card;
