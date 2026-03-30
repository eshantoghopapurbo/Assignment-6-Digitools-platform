import React from 'react';
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen gap-10">

      {/* Text Section */}
      <div className="text-center lg:text-left">
        <a className='inline-block rounded-full bg-[#E1E7FF] px-4 py-2 text-[#4F39F6] text-sm'>
          New: AI-Powered Tools Available
        </a>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-4 leading-tight">
          Supercharge Your <br className="hidden sm:block" /> Digital Workflow
        </h1>

        <p className="py-4 text-[#627382] text-base sm:text-lg md:text-xl">
          Access premium AI tools, design assets, templates, and productivity <br className="hidden md:block" />
          software—all in one place. Start creating faster today.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
          <button className="btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6">
            Explore Products
          </button>
          <button className='btn rounded-full border border-[#4F39F6] text-[#4F39F6] px-6'>
            Watch Demo
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={BannerImg}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          alt="Banner"
        />
      </div>

    </div>
  );
};

export default Banner;