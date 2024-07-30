import React from "react"
// import {Link} from "react-router-dom"
import mps from '../assests/img/mps.jpeg'
export default function MPS() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
       <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-4xl lg:text-5xl text-center mt-10"> MANAGED PRINT SERVICES </h1>
      <main className="flex-1">
        <section className="w-full py-5 sm:py-24 md:py-32 lg:py-40 xl:py-20">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
            
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Businesses have varying needs when it comes to handling print volumes. Some require significant investments to manage large volumes of print-outs, others need minimal investment for occasional printing support, and some are simply seeking technical assistance for their existing printers.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                MPS is a flexible solution that caters to diverse industry requirements. At Toner Technical Point, we have successfully implemented MPS for companies in sectors such as Hospitality, Logistics, Education, Health and Wellness, and Banking and Financial Services.
                </p>
              </div>
             
            </div>
            <div className="flex justify-center">
              <img
                src={mps}
                width="500"
                height="500"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-fit sm:w-4/5"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-5 sm:py-24 md:py-32 lg:py-40 xl:py-48 bg-muted">
        <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-3xl lg:text-4xl text-center mb-3"> MPS Models </h1>
<div className="container mx-auto p-4 ">
      <div className="grid gap-6 md:grid-cols-2 ">
        <div className="flex flex-col md:flex-row bg-blue-100 rounded-lg shadow-md overflow-hidden 0">
          
          <div className="p-4 ">
            <h3 className="text-lg font-semibold text-center"> Per Cartridge Model </h3>
            <p className="text-gray-600">With the Per Cartridge Model, you pay for each toner or ink cartridge as needed. This model is ideal for businesses with fluctuating printing needs or those that prefer to control their supply costs directly. It allows you to purchase cartridges on-demand, ensuring you only pay for what you use without any long-term commitments.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-blue-100 rounded-lg shadow-md overflow-hidden">
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">Per Page Model</h3>
            <p className="text-gray-600">The Per Page Model allows you to pay based on the number of pages printed. This model provides a predictable cost structure and is suitable for businesses with consistent printing needs. It helps in budgeting and cost management as you pay a fixed rate per printed page, regardless of the cartridge or printer used..</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-blue-100 rounded-lg shadow-md overflow-hidden">
          
          <div className="p-4 ">
            <h3 className="text-lg font-semibold text-center">Lease Model</h3>
            <p className="text-gray-600">In the Lease Model, you lease printers and related equipment for a fixed term. This model is perfect for businesses that want access to the latest printing technology without the high upfront costs. The lease typically includes maintenance and support services, ensuring that your printing infrastructure is always up-to-date and functioning efficiently.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-blue-100 rounded-lg shadow-md overflow-hidden">
          
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center">Adoption Model</h3>
            <p className="text-gray-600">The Adoption Model integrates our MPS into your existing print infrastructure. This model is designed for businesses that already have a printing setup but want to optimize their operations and reduce costs. We analyze your current printing environment and implement solutions to enhance efficiency, manage supplies, and provide technical support.</p>
            
          </div>
        </div>
      </div>
    </div>

        </section>
      </main>
     
    </div>
  )
}

// function BriefcaseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//       <rect width="20" height="14" x="2" y="6" rx="2" />
//     </svg>
//   )
// }


// function GaugeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m12 14 4-4" />
//       <path d="M3.34 19a10 10 0 1 1 17.32 0" />
//     </svg>
//   )
// }


// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }


// function ShieldIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
//     </svg>
//   )
// }