import React from 'react';

import LineImg from "../assets/Line 7.png"

const SectionStats = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='flex flex-row md:flex-row justify-center items-center p-8 gap-6 md:gap-20'>
                <div>
                <h1  className='text-4xl font-bold text-[#FFFFFF] sm:mb-2' >50K+</h1>
                <p className='text-[#FFFFFF]' >Active Users</p>
            </div>
           <div>
             <img className='bg-[#FFFFFF] ' src={LineImg} alt="" />
           </div>
           <div>
             <h1 className='text-4xl font-bold text-[#FFFFFF] sm:mb-2 '>200+</h1>
             <p className='text-[#FFFFFF]'>Premium Tools</p>
           </div>
           <div>
            <img  className='bg-[#FFFFFF]' src={LineImg} alt="" />
           </div>
           <div>
            <h1 className='text-4xl font-bold text-[#FFFFFF] sm:mb-2 ' >4.9</h1>
            <p className='text-[#FFFFFF]' >Rating</p>
           </div>
            </div>
        </div>
    );
};

export default SectionStats;