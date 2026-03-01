import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 px-6 md:px-20 lg:px-32 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        
        <div>
          <h3 className="text-3xl font-bold mb-3">GoKart</h3>
          <p className="text-sm leading-relaxed">
            Welcome to GoKart, your ultimate destination for the latest and 
            smartest gadgets. From smartphones and smartwatches to essential 
            accessories, we bring you the best in innovation — all in one place.
          </p>
        </div>

        
        <div>
          <ul className="space-y-2">
            <li className="text-xl font-semibold mb-2">Products</li>
            <li className="hover:translate-x-1 transition">Earphones</li>
            <li className="hover:translate-x-1 transition">Headphones</li>
            <li className="hover:translate-x-1 transition">Smartphones</li>
            <li className="hover:translate-x-1 transition">Laptop</li>
          </ul>
        </div>

        
        <div>
          <ul className="space-y-2">
            <li className="text-xl font-semibold mb-2">Websites</li>
            <li className="hover:translate-x-1 transition">Home</li>
            <li className="hover:translate-x-1 transition">Privacy Policy</li>
            <li className="hover:translate-x-1 transition">Become Plus Member</li>
            <li className="hover:translate-x-1 transition">Create Your Store</li>
          </ul>
        </div>

    
        <div>
          <ul className="space-y-2">
            <li className="text-xl font-semibold mb-2">Contact</li>
            <li className="hover:translate-x-1 transition">+1234567890</li>
            <li className="hover:translate-x-1 transition">contact@example.com</li>
            <li className="hover:translate-x-1 transition">794 Francisco, 94102</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;