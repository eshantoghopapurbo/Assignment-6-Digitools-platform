
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Digitool from './components/digitool'

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import PricingCart from './components/PricingCart'
import SectionStats from './components/SectionStats'
import StepCart from './components/StepCart'
import Cart2 from './components/Cart2'


const getdigiTools = async () => {
  const res = await fetch ("/digitools.json")
   return res.json ()
}
 

function App() {
  const digitoolPromise = getdigiTools() 

  const [activeTab,setActiveTab] =useState ('product');
  const [carts,setCarts] = useState([])
  


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <SectionStats></SectionStats>
                  <div className='text-center mt-15'>
                <h2 className= 'text-5xl font-bold mb-5' >Premium Digital Tools</h2>
                <p className='text-[#627382] mb-3' >Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
      <div className='text-center space-x-3 my-5'>
     <button 
       className={`btn rounded-full w-30 ${
      activeTab === "product" 
        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" 
        : "bg-gray-200 text-black"
    }`}
       onClick={() => setActiveTab("product")}
     >
       Product
     </button>

  <button 
    className={`btn rounded-full w-30 ${
      activeTab === "card" 
        ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" 
        : "bg-gray-200 text-black"
    }`}
    onClick={() => setActiveTab("card")}
  >
    Cart
  </button>
      </div>


      <Suspense>
      { activeTab === "product" && <Digitool digitoolPromise={digitoolPromise} carts={carts}
      setCarts={setCarts} ></Digitool>}
      </Suspense>
      { activeTab === "card" && <Cart2 carts={carts} setCarts={setCarts} > </Cart2>}

      <StepCart></StepCart>
       <PricingCart></PricingCart>
       <Footer></Footer>
    </>
  )
}

export default App
