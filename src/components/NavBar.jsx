import React from 'react';
import shopingImg from "../assets/products/shopping-cart.png"
const NavBar = ({carts}) => {
    return (
       <div className="navbar container mx-auto bg-base-100 ">
  <div className="navbar-start grid grid-cols-1">
      <h2 className=' text-2xl font-bold text-[#4F39F6] to-[#9514FA]'>DigiTools</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl font-semibold ">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end">
       <div className='flex gap-4 items-center'>
         <div className='relative '>
          <div className='bg-red-700 rounded-full p-2 absolute w-6 h-6 left-2 -top-1.5  '>
          <p className='absolute top-0 text-white' >{carts.length}</p>

          </div>
          <img className='w-5 h-8 ' src={shopingImg} alt="" />
         </div>
        <button className='text-xl'>Login</button>
     <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>
      Get Started</button>
       </div>
  </div>
</div>
    );
};

export default NavBar;