import React from 'react';

const PricingCart = () => {
    return (
        <div className='container mx-auto  mt-50'>
            <div className='grid justify-center items-center my-8'>
                <h1 className='text-[#101727] font-bold text-4xl'>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]' >Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-3  gap-45'>
                {/* cart-1 */}
                 <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body h-[448px]">
    <div>
      <h2 className="text-3xl font-bold mb-3">Starter</h2>
      <p className='text-[#627382] mb-10'> Perfect for getting started </p>
    </div>
    <div>
        <p className="text-xl"><span className='text-4xl font-bold'>$0</span>/month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
    <div className="mt-12">
      <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full
       w-full h-[52px] text-white">Get Started Free</button>
    </div>
  </div>
             </div>
             {/* cart-2 */}
                <div className ="card w-96 bg-base-100 shadow-sm text-white">
  <div className="card-body h-[448px] bg-gradient-to-r relative from-[#4F39F6] to-[#9514FA]">
    <div className='absolute  -top-4    right-35'>
        <span className="text-[#BB4D00] bg-[#FEF3C6]   rounded-full px-4 py-1">Most Popular</span>
    </div>
    <div>
      <h2 className="text-3xl font-bold mb-2">Pro</h2>
      <p className='text-[#627382] mb-2' >Best for professionals</p>
    </div>
    <div>
        <p className="text-xl"><span className='text-4xl font-bold'>$29</span>/month</p>
    </div>
    <ul className="mt-4 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Advanced analytics</span>
      </li>
    </ul>
    <div className="mt-10">
      <button className="btn bg-white
       rounded-full w-full h-[52px] text-[#4F39F6] font-bold">Start Pro Trial</button>
    </div>
  </div>
             </div>
               
              {/* cart-3  */}
                <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body h-[448px]">
    <div className="">
      <h2 className="text-3xl font-bold mb-3">Starter</h2>
      <p className='text-[#627382] mb-10' >Perfect for getting started</p>
    </div>
    <div>
        <p className="text-xl"><span className='text-4xl font-bold'>$0</span>/month</p>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
    <div className="mt-12">
      <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full
       w-full h-[52px] text-white">Get Started Free</button>
    </div>
  </div>
             </div>
            </div>
        </div>
    );
};
export default PricingCart;