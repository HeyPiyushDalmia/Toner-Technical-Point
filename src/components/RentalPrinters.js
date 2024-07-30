import React from 'react';
import hplogo from '../assests/img/hplogo.svg'
import epsonlogo from '../assests/img/epsonlogo.svg'
import brotherlogo from '../assests/img/brotherlogo.png'
import canonlogo from '../assests/img/canonlogo.jpg'
import hp126nw from '../assests/img/hp126nw.jpg'
import canon274dn from '../assests/img/canon274dn.jpg'
import brother3270 from '../assests/img/brother3270.jpeg'
import epsonl3260 from '../assests/img/epsonl3260.jpg'
export default function RentalPrinters() {
    const printers = [
      {
        id: 1,
        name: "HP LaserJet Pro MFP126nw",
        description: "HP Laserjet Pro M126nw Multi-Function Direct Wireless Network Laser Printer ",
        image: hp126nw,
        specs: {
          type: "Laser",
          speed: "Up to 21 pages/minute",
          resolution: "600 x 600 dpi",
          connectivity: "Wireless, USB",
          dimensions: "19.6D x 13.1W x 13.8H Centimeters",
          weight: "10 kg",
        },
      },
      {
        id: 2,
        name: "Canon imageCLASS MF274dn",
        description: "4-in-1 Monochrome Multifunction for Home and Small Offices",
        image: canon274dn,
        specs: {
          type: "Laser",
          speed: "Up to 29 pages/minute",
          resolution: "2400 x 600 dpi",
          connectivity: "USB, Ethernet",
          dimensions: "39D x 37.4W x 36.8H Centimeters",
          weight: "11 kg",
        },
      },
      {
        id: 3,
        name: "Brother HL-L3270CDW ",
        description: "Wireless Colour LED Printer, Duplex NFC Mobile Print",
        image: brother3270,
        specs: {
          type: "Laser",
          speed: "Up to 24/25 pages/minute",
          resolution: "600 x 600 dpi, 2,400 dpi (600 x 2400) quality",
          connectivity: "Ethernet, Wireless",
          dimensions: "17.3D x 18.1W x 9.9H inches",
          weight: "18.5 kg",
        },
      },
      {
        id: 4,
        name: "Epson EcoTank L3260",
        description: "A4 Wi-Fi All-in-One Ink Tank Printer",
        image: epsonl3260,
        specs: {
          type: "Inkjet",
          speed: "upto 33 pages/minute",
          resolution: "1200 x 2400 dpi",
          connectivity: "Wi-Fi",
          dimensions: "26D x 46W x 28H Centimeters",
          weight: "6kg",
        },
      },
    ]
    const dealerLogos = [hplogo, canonlogo, epsonlogo, brotherlogo]
    return (
      <div className="bg-white min-h-screen">
        
        <main>
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-6 text-center">Top Printer Brands</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
                {dealerLogos.map((logo, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                    <img src={logo} alt={`Dealer Logo ${index + 1}`} className="h-72 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold mb-10 text-center">Available Printers for Rent</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {printers.map((printer) => (
                  <div key={printer.id} className="bg-blue-100 rounded-lg shadow-md overflow-hidden ">
                    <img src={printer.image} alt={printer.name} className="w-full h-72 object-cover" />
                    <div className="p-4 ">
                      <h3 className="text-lg font-bold mb-2">{printer.name}</h3>
                      <p className="text-gray-600 mb-4">{printer.description}</p>
                      <div className="flex justify-between items-center">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">
                          Contact For Rent
                        </button>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-gray-800 font-bold mb-2">Specifications</h4>
                        <ul className="list-disc pl-4 text-gray-600">
                          <li>Type: {printer.specs.type}</li>
                          <li>Speed: {printer.specs.speed}</li>
                          <li>Resolution: {printer.specs.resolution}</li>
                          <li>Connectivity: {printer.specs.connectivity}</li>
                          <li>Dimensions: {printer.specs.dimensions}</li>
                          <li>Weight: {printer.specs.weight}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }