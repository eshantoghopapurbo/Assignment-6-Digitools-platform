import React from 'react';
import { FaSquareInstagram, FaFacebook, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='border border-amber-300 bg-[#101727] mt-30'>
           <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 my-17'>
             <div className=''>
            <h1 className='text-[#FFFFFF] text-3xl font-bold mb-4'>DigiTools</h1>
            <p className='text-[#FFFFFF]'>Premium digital tools for creators,<br/> professionals, and businesses. Work smarter <br/> with our suite of powerful tools.</p>
            </div>
            <div className='text-[#FFFFFF]'>
                <h3 className='text-2xl mb-2'>Product</h3>
                <p>Features</p>
                <p>Pricing</p>
                <p>Templates</p>
                <p>Integrations</p> 
            </div>
            <div className='text-[#FFFFFF]'>
                <h3>Company</h3>
                <p>About</p>
                <p>Blog</p>
                <p>Careers</p>
                <p>Press</p>
            </div>
            <div className='text-[#FFFFFF]'>
                <h3 className='text-2xl mb-2' >Resources</h3>
                <p>Documentation</p>
                <p>Help Center</p>
                <p>Community</p>
                <p>Contact</p>
            </div>
            <div className='text-[#FFFFFF]'>
                <h1 className='text-2xl mb-4'>Social Links</h1>
              <div className='flex gap-6 sm:gap-9 justify-start sm:justify-center lg:justify-start'>
                <FaSquareInstagram />
              <FaFacebook />
              <FaXTwitter />
              </div>
            </div>
           </div>
           <div className='container mx-auto'>
            <hr className='border-t-2 border-gray-600' />
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 my-8'>
                <p className='text-[#FAFAFA]' >© 2026 Digitools. All rights reserved.</p>
                <div className='flex gap-10 text-[#FAFAFA] '>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
           </div>
            </div>
    );
};

export default Footer;