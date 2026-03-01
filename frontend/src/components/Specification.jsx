import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Specification = () => {
  return (
    <div className="w-full px-6 md:px-10 lg:px-30 py-12 space-y-4">

      <h3 className="text-center text-2xl md:text-3xl font-bold">
        Our Specifications
      </h3>

      <p className="text-center text-sm md:text-base text-gray-700">
        We offer top-tier service and convenience to ensure your shopping experience is smooth,
        secure and completely hassle-free.
      </p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

        
        <div className="bg-blue-500 h-48 rounded-2xl flex flex-col justify-center items-center gap-2 px-6 text-white text-center">
          <BsFillSendFill size={28} className="text-amber-300" />
          <h3 className="text-xl font-semibold">Free Shipping</h3>
          <p className="text-sm">
            Enjoy fast, free delivery on every order — no conditions, just reliable doorstep service.
          </p>
        </div>

        
        <div className="bg-cyan-500 h-48 rounded-2xl flex flex-col justify-center items-center gap-2 px-6 text-white text-center">
          <TbTruckReturn size={32} className="text-amber-300" />
          <h3 className="text-xl font-semibold">7 Days Easy Return</h3>
          <p className="text-sm">
            Change your mind? No worries. Return any item within 7 days.
          </p>
        </div>

        
        <div className="bg-emerald-400 h-48 rounded-2xl flex flex-col justify-center items-center gap-2 px-6 text-white text-center">
          <BiSupport size={32} className="text-amber-300" />
          <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
          <p className="text-sm">
            We're here for you. Get expert help anytime with our dedicated support team.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Specification;
