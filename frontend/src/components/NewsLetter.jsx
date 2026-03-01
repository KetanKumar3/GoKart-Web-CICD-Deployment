import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-20 px-4">
      <h3 className="text-center text-2xl md:text-3xl font-bold">
        Join Newsletter
      </h3>

      <p className="text-center max-w-xl text-sm md:text-base px-2">
        Subscribe to get exclusive deals, new arrivals, and insider updates
        delivered straight to your inbox every week.
      </p>

      <div className="flex w-full max-w-md bg-gray-200 rounded-3xl p-2 gap-2 items-center">
        <input
          type="text"
          placeholder="Enter Your Email Address"
          className="flex-1 bg-transparent outline-none px-2 text-sm md:text-base"
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded-3xl text-xs md:text-sm hover:bg-green-600 transition">
          Get Updates
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;