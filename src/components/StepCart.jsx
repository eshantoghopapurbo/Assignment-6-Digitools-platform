import React from 'react';

import CartImg from "../assets/Frame1.png"
import CardImg1 from "../assets/Frame2.png"
import CardImg2 from "../assets/Frame3.png"
import Cart from "../assets/user.png"
import cart1 from "../assets/package.png"
import cart2 from "../assets/rocket.png"
const StepCart = () => {
    return (
        <div>
            <div className='grid justify-center mt-30'>
                <h1 className='text-5xl font-bold '>Get Started in 3 Steps</h1>
                <p className='text-[#627382] font-semibold p-4'>Start using premium digital tools in minutes, not hours.</p>
            </div>
          <div className='grid md:grid-cols-1 lg:grid-cols-3 container mx-auto gap-[30px]   mb-8 '>
            {/* card 1 */}
      <div className='shadow-lg rounded-lg  border-zinc-600 bg-white h-[380px]'>
              <div className=' grid justify-end p-2'>
                  <img src={CartImg}/>
              </div>
                <div className='grid justify-center items-center p-10'>
                <div className='flex justify-center items-center'>
                    <img className='border p-5 rounded-full bg-purple-100' src={Cart}/>
                </div>
                 <div className='text-center'>
                     <h1 className='text-xl font-semibold'>Create Account</h1>
                 <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                 </div>
                </div>
            </div>
            {/* card 2 */}
      <div className='shadow-lg rounded-lg  border-zinc-600 bg-white h-[380px]'>
              <div className=' grid justify-end p-2'>
                  <img src={CardImg1}/>
              </div>
                <div className='grid justify-center items-center p-10'>
                <div className='flex justify-center items-center'>
                    <img className='border p-5 rounded-full bg-purple-100' src={cart1}/>
                </div>
                 <div className='text-center'>
                     <h1 className='text-xl font-semibold'>Create Account</h1>
                 <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                 </div>
                </div>
            </div>

            {/* card 3 */}
      <div className='shadow-lg rounded-lg  border-zinc-600 bg-white h-[380px] '>
              <div className=' grid justify-end p-2'>
                  <img src={CardImg2}/>
              </div>
                <div className='grid justify-center items-center p-10'>
                <div className='flex justify-center items-center '>
                    <img className='border p-5 rounded-full bg-purple-100' src={cart2}/>
                </div>
                 <div className='text-center'>
                     <h1 className='text-xl font-semibold'>Create Account</h1>
                 <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                 </div>
                </div>
            </div>
            
           
          </div>
        </div>
    );
};

export default StepCart;