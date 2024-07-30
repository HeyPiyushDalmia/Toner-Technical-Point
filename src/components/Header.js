import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
 export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100">
      <Link
        to="/"
        className="flex items-center h-10 px-10  rounded-tl-full rounded-br-full font-bold uppercase italic text-black hover:opacity-90"
      >
        {props.title}
      </Link>
      <nav className="hidden sm:flex justify-between items-center gap-4 font-semibold">
        <Link to="/" className="hover:text-gray-500">
          Home
        </Link>
        <Link to="/About" className="hover:text-gray-500">
          About
        </Link>
        
          <Link className="nav-link hover:text-gray-500" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/RemanufacturedToner">{props.service1}</Link></li>
            <li><Link className="dropdown-item" to="/TonerRefilling">{props.service2}</Link></li>
            <li><Link className="dropdown-item" to="/RentalPrinters">{props.service3}</Link></li>
            <li><Link className="dropdown-item" to="/MPS">{props.service4}</Link></li>
          </ul>
  
        <Link to="/Faq" className="hover:text-gray-500">
          FAQs
        </Link>
        <Link to="/Contact" className="hover:text-gray-500">
          Contact
        </Link>
      </nav>
      <nav className="sm:hidden flex flex-col items-end gap-1 font-semibold">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="sm:hidden font-bold text-xl hover:text-gray-500"
        >
          {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <>
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link to="/About" className="hover:text-gray-500">
              About
            </Link>
            <Link className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/RemanufacturedToner">{props.service1}</Link></li>
            <li><Link className="dropdown-item" to="/TonerRefilling">{props.service2}</Link></li>
            <li><Link className="dropdown-item" to="/RentalPrinters">{props.service3}</Link></li>
            <li><Link className="dropdown-item" to="/MPS">{props.service4}</Link></li>
          </ul>
            <Link to="/Faq" className="hover:text-gray-500">
              FAQs
            </Link>
            <Link to="/Contact" className="hover:text-gray-500">
              Contact
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

Header.propTypes = {
    title : PropTypes.string,
    service1: PropTypes.string,
    service2: PropTypes.string,
    service3: PropTypes.string,
    service4: PropTypes.string
}

// Header.defaultProps = {
//     tilte : 'Set your title here',
//     service1: 'Set your service1 here',
//     service2: 'set your service2 here',
//     service3: 'set your service3 here',
//     service4: 'set your service4 here'
// }