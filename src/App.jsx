
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
  console.log(carts);


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <SectionStats></SectionStats>
      <div className='text-center'>
                <button className='btn rounded-full w-30' onClick={() => setActiveTab ("product")} >Product</button>
                <button className='btn rounded-full w-30 ' onClick={() => setActiveTab ("card")}>Card</button>
            </div>

      <Suspense>
      { activeTab === "product" && <Digitool digitoolPromise={digitoolPromise} carts={carts}
      setCarts={setCarts} ></Digitool>}
      </Suspense>
      { activeTab === "card" && <Cart2></Cart2>}

      <StepCart></StepCart>
       <PricingCart></PricingCart>
       <Footer></Footer>
    </>
  )
}

export default App
