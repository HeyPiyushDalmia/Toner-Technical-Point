import React from 'react'
import Printquality from '../assests/img/printquality.png'
import Ecofriendly from '../assests/img/ecofriendly.jpg'
import tonerRefilling from '../assests/img/TonerRefilling.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(tonerno, printerno) {
  return { tonerno, printerno };
}

const rows = [
  createData('Q2612a', 'HP LaserJet 1018, 1020, 1022, M1005, 3055'),
  createData('CB-488a', 'HP LaserJet P1007, 1008, 1213nf, 1216nfh'),
  createData('CB-436a', 'HP LaserJet P1505, M1120, MFP1522nf'),
];

function colorCreateData(ctonerno, cprinterno) {
    return { ctonerno, cprinterno };
  }
  
  const crows = [
    colorCreateData('Q2612a', 'HP LaserJet 1018, 1020, 1022, M1005, 3055'),
    colorCreateData('CB-488a', 'HP LaserJet P1007, 1008, 1213nf, 1216nfh'),
    colorCreateData('CB-436a', 'HP LaserJet P1505, M1120, MFP1522nf'),
  ];

export default function TonerRefilling() {
  return (
  <>
  <h1 className='text-center text-black font-medium text-5xl'>TONER REFILLING</h1>

  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            <div className="mt-12 md:mt-0">
            <img src={tonerRefilling} alt="Remanufactured Toner" className="object-contain rounded-lg mix-blend-multiply m-auto"/> 
            </div>
            
                <div className="">
                <h2 className='font-bold text-2xl mt-10 mb-2'>Refilling - Quality</h2>
                <p className="mt-4 text-black text-lg ">We use only premium toner specifically designed for each individual cartridge. Additionally, we replace all moving and worn parts whenever possible to ensure excellent print performance every time. We also offer a free collection and delivery service for all businesses (at participating stores), saving you time and providing greater convenience.</p>
                  </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mt-10">
            <div className="">
                <h2 className='font-bold text-2xl mt-10 mb-2 text-center'>Environmental Reasons to Refill Cartridges</h2>
                <p className="mt-4 text-black text-lg text-center">Refilling toner cartridges offers significant environmental benefits. The environmental impact of the toner itself remains the same whether delivered in cartridges or by itself, but reusing a single cartridge multiple times greatly reduces the environmental impact of manufacturing and distribution.</p>
                  </div>
         
            
            <div className="mt-12 md:mt-0">
            <img src={Ecofriendly} alt="Remanufactured Toner" className="object-contain rounded-lg mix-blend-multiply m-auto h-72"/>
            </div>

            </div>
   
   
  <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            <div className="mt-12 md:mt-0">
            <img src={Printquality} alt="Remanufactured Toner" className="object-contain rounded-lg mix-blend-multiply m-auto w-3/5"/> 
            </div>
            
                <div className="">
                <h2 className='font-bold text-2xl mt-10 mb-2'>Safety Considerations</h2>
                <p className="mt-4 text-black text-lg ">
                Toner powder can be harmful if inhaled, presenting certain safety risks during the refilling process. While toner powder is not toxic, it must be handled with care. Health and safety regulations should be followed when handling, transporting, and storing toner powders. It is advisable to wear gloves and a protective dust mask to prevent inhalation. Spilled toner should not be cleaned with a standard vacuum cleaner as it can become electrically charged and ignite a fire, and its fine particles can pass through filters and escape into the room or the vacuum cleaner motor.
                </p>
                  </div>

            </div>
   
    </div>


    <h1 className="text-4xl font-bold text-center mb-10">Our Service for Toner Refilling Products:</h1>

    <div className='w-4/5 item-center m-auto'>
 <h2 className='text-center font-bold text-2xl mt-10 mb-2 clear-both'>BLACK LASERJET TONERS</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Toner No.</TableCell>
            <TableCell align="center">HP Laser Printer Model No.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.tonerno}>
              <TableCell component="th" scope="row" align="center">
                {row.tonerno}
              </TableCell>
              <TableCell align="center">{row.printerno}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <h2 className='text-center font-bold text-2xl mt-10 mb-2'>COLOR LASERJET TONERS</h2>
    <TableContainer component={Paper} className='mb-10'>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Toner No.</TableCell>
            <TableCell align="center">HP Laser Printer Model No.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {crows.map((row) => (
            <TableRow key={row.ctonerno}>
              <TableCell component="th" scope="row" align="center">
                {row.ctonerno}
              </TableCell>
              <TableCell align="center">{row.cprinterno}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  </>
  )
}
