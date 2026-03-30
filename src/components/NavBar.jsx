import React from 'react';
import shopingImg from "../assets/products/shopping-cart.png"
const NavBar = () => {
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
       <div className='flex gap-4'>
         <img className='w-5 ' src={shopingImg} alt="" />
        <button className='text-xl'>Login</button>
     <button className='btn rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white'>
      Get Started</button>
       </div>
  </div>
</div>
    );
};

export default NavBar;