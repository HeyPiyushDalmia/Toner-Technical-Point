import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import sliderimg1 from '../assests/img/slider1img.jpg'
import mps from '../assests/img/mps.jpeg'
import Printerrent from '../assests/img/printerrent.png'
import TonerRefilling from '../assests/img/TonerRefilling.png'
import remanufacturing from '../assests/img/remanufaccturing.png'
import budgetfriendly from '../assests/img/budgetfriendly.png'
import quality from '../assests/img/quality.png'
import faqcard from '../assests/img/faqcard.jpg'
import { Autoplay} from 'swiper/modules';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
export default function Index() {
 
  return (
    <>
    <Swiper
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img className='homeslider' src={sliderimg1} alt="Image1 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='homeslider' src={sliderimg1}alt="Image1 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='homeslider' src={sliderimg1} alt="Image1 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='homeslider' src={sliderimg1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='homeslider' src={sliderimg1} alt="Image1 5" />
      </SwiperSlide>
    </Swiper>

<div className='mb-10 float-center'>
 
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 m-auto">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-4xl text-center mb-3"> Our Services </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 items-start">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="/RemanufacturedToner" className="absolute inset-0 z-10" >
              <span className="sr-only">View</span>
            </Link>
            <img src={remanufacturing} alt="Coverimage" width={300} height={400} className="[grid-area:stack] object-contain w-full aspect-[3/4]"/>
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Remanuctured Toner</h3>
              <p className="text-sm leading-relaxed">Our remanufacturing process ensures that each toner cartridge meets the highest standards of quality and reliability.</p>
              <Button variant="secondary" size="sm" className="bg-white-900">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="/TonerRefilling" className="absolute inset-0 z-10" >
              <span className="sr-only">View</span>
            </Link>
            <img src={TonerRefilling} alt="Coverimage" width={300} height={400} className="[grid-area:stack] object-cover w-full aspect-[3/4]" />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Toner Refilling</h3>
              <p className="text-sm leading-relaxed">
              We use only premium toner specifically designed for each individual cartridge Additionally, we replace all moving read more...
              </p>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="/RentalPrinters" className="absolute inset-0 z-10" >
              <span className="sr-only">View</span>
            </Link>
            <img src={Printerrent} alt="Coveimage" width={300} height={400} className="[grid-area:stack] object-cover w-full aspect-[3/4]" />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Rental Printers</h3>
              <p className="text-sm leading-relaxed">We specialize in providing comprehensive rental printer solutions tailored to meet the diverse needs of businesses and organizations</p>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link to="/MPS" className="absolute inset-0 z-10" >
              <span className="sr-only">View</span>
            </Link>
            <img src={mps} alt="Coverimage" width={300} height={400} className="[grid-area:stack] object-cover w-full aspect-[3/4]"/>
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-4 lg:p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">Mangaed Print Services</h3>
              <p className="text-sm leading-relaxed">Some businesses may look for heavy investment to handle large volumes of print-outs. Others may need minimum investment for some printing support.</p>
              <Button variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
 
 
    
    
    <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-4xl text-center mt-10 mb-3"> Why Choose Us </h1>
        
    <div className="container mx-auto p-4">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full md:w-1/3 object-contain"
            src={remanufacturing}
            alt="Remanufacturing"
          />
          <div className="p-4 md:w-2/3">
            <h3 className="text-lg font-semibold">Remanufacturing </h3>
            <p className="text-gray-600">Remanufacturers collect used, empty laser printer cartridges from customers, then clean, disassemble, and replace all necessary parts, including high-quality toner, in a factory.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full md:w-1/3 object-contain" src={budgetfriendly} alt="Budget Friendly"/>
          <div className="p-4 md:w-2/3">
            <h3 className="text-lg font-semibold">Budget Friendly</h3>
            <p className="text-gray-600">Remanufactured cartridges are 45-50% cheaper than original cartridges, yet they provide the same excellent printing quality..</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full md:w-1/3 object-contain" src={quality} alt="Quality" />
          <div className="p-4 md:w-2/3">
            <h3 className="text-lg font-semibold">Quality</h3>
            <p className="text-gray-600">The print quality and page yield of Toner Technical Point's remanufactured toners are comparable to those of OEM toner cartridges.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
          <img className="w-full md:w-1/3 object-contain" src={faqcard} alt="FaqCard" />
          <div className="p-4 md:w-2/3">
            <h3 className="text-lg font-semibold">Any Questions still to know?</h3>
            <p className="text-gray-600">Read our FAQ to get all the answers of most common questions asked. Still not satisfied contact our support to help you ..</p>
            
          </div>
        </div>
      </div>
    </div>

    </div>

    </>
  )
}
