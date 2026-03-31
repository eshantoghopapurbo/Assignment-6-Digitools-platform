import { use } from "react";


const Digitools = ({digitoolPromise}) => {

    const digitools =use(digitoolPromise)
    console.log(digitools);
    
    return (
        <div className="py-20">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-5" >Premium Digital Tools</h1>
                <p className="text-[#627382]" >Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
            </div>
            <div>
                {digitools.map(digitool => 
                <div className ="card w-96 bg-base-100 shadow-sm text-white">
  <div className="card-body h-[448px] shadow-lg">
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
             )}
            </div>
        </div>
    );
};

export default Digitools;