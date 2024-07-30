import React, {Suspense} from 'react'
import Lottie from 'lottie-react'
import Loading from './assests/animation/loading.json'
import './assests/css/style.css'
import Pagenotfound from './components/Pagenotfound';
import Header from './components/Header';
import RentalPrinters from './components/RentalPrinters';
import ManagedPrintServices from './components/MPS';
import {Index,About,Contact,Faq,RemanufacturedToner,TonerRefilling} from './Exports';
import Footer from './components/Footer';
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Suspense fallback = {<Lottie animationData={Loading}/>} >
    <Header title="Toner Technical Point" service1 = "Remanufactured Toner" service2="Toner Refilling" service3="Rental Printers" service4="Managed Print Services"/>
    <Switch>
    <Route path="/" element={<Index />} />  
    <Route path="/Faq" element={<Faq />} />  
    <Route path="/Contact" element={<Contact />} />  
    <Route path="/About" element={<About />} />  
    <Route path="/RemanufacturedToner" element={<RemanufacturedToner />} />  
    <Route path="/TonerRefilling" element={<TonerRefilling />} />  
    <Route path="/RentalPrinters" element={<RentalPrinters />} />  
    <Route path="/MPS" element={<ManagedPrintServices />} />  
    <Route path ="*" element={<Pagenotfound/>}/>
    </Switch>
    <Footer service1 = "Remanufactured Toner" service2="Toner Refilling" service3="Rental Printers" service4="Managed Print Services"/>
    </Suspense>
      </BrowserRouter>

  )
}


export default App;
