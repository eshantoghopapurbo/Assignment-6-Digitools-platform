import React from 'react';

import BannerImg from "../assets/banner.png";

const Banner = () => {
    return (
       
            <div className=" container mx-auto  justify-between items-center  min-h-screen flex lg:flex-row-reverse sm:flex-col">
                <div>
                    <img
                        src={BannerImg}
                        className="max-w-lg rounded-lg shadow-2xl"
                    />
                </div>
                <div>
                    <a className='rounded-full bg-[#E1E7FF] px-2 py-2  text-[#4F39F6]'>New: AI-Powered Tools Available</a>
                    <h1 className="text-7xl font-bold m-4 ">Supercharge Your  <br /> Digital Workflow</h1>
                    <p className="py-6 text-[#627382] text-xl">
                        Access premium AI tools, design assets, templates, and productivity <br />
                        software—all in one place. Start creating faster today. <br />
                        Explore Products
                    </p>
                    <div className='flex gap-4'>
                        <button className="btn btn-primary rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Explore Products</button>
                        <button className='btn rounded-full border-[#4F39F6]  text-[#4F39F6]' >Watch Demo</button>
                    </div>
                </div>
            </div>
        
    );
};

export default Banner;