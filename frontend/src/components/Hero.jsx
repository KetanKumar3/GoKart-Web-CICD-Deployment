import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-24 py-10">
      <div className="flex flex-col lg:flex-row gap-8">

        
        <div
          className="relative flex-1 min-h-[320px] md:h-96 rounded-2xl p-8 md:p-10 flex justify-between overflow-hidden"
          style={{ backgroundColor: "#DB8D3E" }}
        >
          <div className="space-y-3 md:space-y-4 z-10 w-2/3 md:w-auto">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Gadgets you'll love. <br /> Prices you'll trust.
            </p>

            <p className="text-lg md:text-xl font-semibold">Starts From</p>
            <p className="text-lg md:text-xl font-semibold">$4.90</p>

            <button className="px-6 md:px-8 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
              Learn More
            </button>
          </div>

          
          <img
            src={image1}
            className="absolute bottom-0 right-0 w-36 sm:w-48 md:w-60 lg:w-72 object-contain"
            alt="Main Product"
          />
        </div>

        
        <div className="flex flex-col gap-8 w-full lg:w-1/3">

          
          <div className="relative bg-amber-300 h-40 sm:h-44 md:h-48 rounded-2xl p-6 overflow-hidden">
            <p className="text-3xl sm:text-4xl font-bold">Best</p>
            <p className="text-3xl sm:text-4xl font-bold">Products</p>

            <div className="flex items-center gap-2 pt-2">
              <p className="font-medium">View More</p>
              <FaArrowRight />
            </div>

            <img
              src={image3}
              className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 object-contain"
              alt="Product 1"
            />
          </div>

          <div className="relative bg-amber-700 h-40 sm:h-44 md:h-48 rounded-2xl p-6 overflow-hidden text-white">
            <p className="text-3xl sm:text-4xl font-bold">20%</p>
            <p className="text-3xl sm:text-4xl font-bold">Discounts</p>

            <div className="flex items-center gap-2 pt-2">
              <p className="font-medium">View More</p>
              <FaArrowRight />
            </div>

            <img
              src={image2}
              className="absolute bottom-0 right-0 w-20 sm:w-28 md:w-36 lg:w-40 object-contain"
              alt="Product 2"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
