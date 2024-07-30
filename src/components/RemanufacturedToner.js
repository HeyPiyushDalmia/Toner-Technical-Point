import * as React from 'react';
import Remanufacturedtoner from '../assests/img/remanufacturedtoner.jpg';
import Remanufacturedtoner1 from '../assests/img/remanufacturedtoner1.jpg';
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

export default function RemanufacturedToner() {
  return (
    <>

<section className="">
<div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-black sm:text-4xl text-center  ">REMANUFACTURED TONER</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            <div className="mt-12 md:mt-0">
            <img src={Remanufacturedtoner} alt="Remanufactured Toner" className="object-cover rounded-lg mix-blend-multiply"/>
            <img src={Remanufacturedtoner1} alt="Remanufactured Toner" className="object-cover rounded-lg mix-blend-multiply"/>
           
          
            
            </div>
            
                <div className="">
                <p className="mt-4 text-black text-lg ">Our remanufacturing process ensures that each toner cartridge meets the highest standards of quality and reliability. Here's a detailed breakdown of each step:</p>

                <p className="mt-4 text-black text-lg "><span className='font-medium'>Complete Disassembly:</span> Each cartridge is meticulously disassembled to its individual components. This allows us to thoroughly inspect and clean every part, ensuring no damage or wear goes unnoticed.</p>

                <p className="mt-4 text-black text-lg "><span className='font-medium'>Thorough Inspection and Cleaning: </span>Once disassembled, all components undergo a rigorous inspection. Parts are separated based on their condition, and any worn or damaged parts are discarded. The remaining parts are then cleaned using specialized equipment to remove any residual toner and debris. This step is crucial for ensuring the longevity and performance of the cartridge.</p>

                <p className='mt-4 text-black text-lg'><span className='font-medium'> New Drum Installation:</span>The drum, a critical component responsible for transferring the toner to the paper, is replaced with a brand new one. This ensures high-quality prints and reduces the risk of print defects.</p>

                <p className='mt-4 text-black text-lg'><span className='font-medium'>New Wiper Blade Installation:</span> A new wiper blade is installed to clean the drum during the printing process. This prevents toner buildup on the drum, which can cause streaks and smudges on printed pages.</p>

                <p className='mt-4 text-black text-lg'><span className='font-medium'>New Magnetic Roller Installation: </span> The magnetic roller, which plays a key role in the toner transfer process, is replaced with a new one. This ensures consistent toner application and helps maintain print quality.</p>

                <p className='mt-4 text-black text-lg'><span className='font-medium'> Refilled Toner Container: </span>The toner container is filled with new toner that meets the original specifications. This ensures that the cartridge delivers the expected print quality and page yield.</p>

                <p className='mt-4 text-black text-lg'><span className='font-medium'>Sealed Toner Container: </span>To prevent any leakage, the toner container is sealed with a pull-out strip. This seal ensures that the toner stays securely in the container until it is ready to be used.</p>

                <p className='mt-4 text-black text-lg'><span className='font-medium'> Reassembly and Testing: </span>After all components are replaced and the toner container is filled and sealed, the cartridge is reassembled. It then undergoes rigorous testing on appropriate equipment to ensure it functions correctly and meets our quality standards. This includes print tests to check for print quality, consistency, and reliability.</p>

               
            </div>
            </div>
        </div>
    
</section>

<h1 className="text-4xl font-bold text-center mb-10">Our Service for Remanuctured Toner:</h1>

    <h2 className='text-center font-bold text-2xl mb-2 clear-both'>BLACK LASERJET TONERS</h2>
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

    {/* </div> */}
    </>
  );
}
