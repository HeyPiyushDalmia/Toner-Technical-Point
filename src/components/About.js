import React from 'react'
import sliderimg1 from "../assests/img/faqcard.jpg"
import mission from '../assests/img/mission.svg'
import calender from '../assests/img/calender.svg'
// import Lottie from 'lottie-react'
// import loading from '../assests/animation/loading.json'
export default function About() {

  return (
    <>
    {/* <Lottie animationData={loading} loop="false"/> */}
  <section className="">
    
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-5xl text-center mb-10 ">ABOUT US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="">
                <p className="mt-4 text-black text-lg ">Established in 2001 as Sharp Toner Point, our journey stared with a commitment of providing printer services. In 2017, we underwent a transformation and emerged as Toner Technical Point towards becoming a top-notch one stop-solution for all your printing requirements.</p>
               
            </div>
            <div className="mt-12 md:mt-0">
                <img src={sliderimg1} alt="About UsImage" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>

    <div className="flex flex-col min-h-[50dvh]">
     
      <main className=" flex-1">

        <section className="w-full py-5 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2">
              <img src={mission} className="h-8 w-8" alt='mission svg' />
                <h2 className="text-2xl font-bold tracking-tighter">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
              At Toner Technical Point, our mission is to simplify your printing needs by offering hassle-free rental services, comprehensive maintenance, and high-quality printing solutions tailored to your business requirements that empower you to achieve your full potential.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2">
                <img src={calender} className="h-8 w-8" alt='calender svg' />
                <h2 className="text-2xl font-bold tracking-tighter">Industry Experience</h2>
              </div>
              <p className="text-muted-foreground">
              With an industry experience of over two decades, Toner Technical Point is proud to have a clientele that includes small businesses, large corporations, and educational institutions. Following are some of our clients: School of Open Learning (Delhi University), ShriRam Institute for Industrial Research (Delhi University), Frontline Electro Medical Limited Noida, Panamax Limited, etc.
              </p>
            </div>
            
          </div>
        </section>
        </main>
        
    </div>
 

    </>
  );
}
