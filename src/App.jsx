
import './App.css'
import Banner from './components/Banner'
import Digitools from './components/Digitools'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import PricingCart from './components/PricingCart'
import SectionStats from './components/SectionStats'
import StepCart from './components/StepCart'

const getdigiTools = async () => {
  const res = await fetch ("/digitools.json")
   return res.json ()
}

const digitoolPromise = getdigiTools() 

function App() {

  return (
    <>

      <NavBar></NavBar>
      <Banner></Banner>
      <SectionStats></SectionStats>

      <Digitools digitoolPromise={digitoolPromise} ></Digitools>

      <StepCart></StepCart>
       <PricingCart></PricingCart>
       <Footer></Footer>

    </>
  )
}

export default App
