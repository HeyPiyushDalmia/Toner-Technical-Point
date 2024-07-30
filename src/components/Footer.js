import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link to="/" className="footer_links ">
                Home
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="/About" className="footer_links ">
                About
              </Link>
            </div>

            <div className="px-5 py-2">
            <Link className="nav-link footer_links " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/RemanufacturedToner">{props.service1}</Link></li>
            <li><Link className="dropdown-item" to="/TonerRefilling">{props.service2}</Link></li>
            <li><Link className="dropdown-item" to="/RentalPrinters">{props.service3}</Link></li>
            <li><Link className="dropdown-item" to="/MPS">{props.service4}</Link></li>
          </ul>
            </div>

            <div className="px-5 py-2">
              <Link to="/Faq" className="footer_links ">
                FAQs
              </Link>
            </div>

            <div className="px-5 py-2">
              <Link to="/contact" className="footer_links ">
                Contact
              </Link>
            </div>

           
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <Link
              to="https://www.facebook.com"
              className="text-gray-400 hover:text-blue-500"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="footer_icons " />
            </Link>

            <Link to="/" className="text-gray-400 hover:text-pink-500">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="footer_icons " />
            </Link>

            <Link to="/" className="text-gray-400 hover:text-blue-500">
              <span className="sr-only">Twitter</span>
              <FaSquareXTwitter className="footer_icons " />
            </Link>

            <Link to="/" className="text-gray-400 hover:text-orange-500">
              <span className="sr-only">G-mail</span>
              <SiGmail className="footer_icons " />
            </Link>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-white">
            &copy; 2024 Toner Technical Point, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  service1: PropTypes.string,
  service2: PropTypes.string,
  service3: PropTypes.string
}

// Footer.defaultProps = {
//   tilte : 'Set your text here',
//   service1: 'Set your service1 here',
//   service2: 'set your service2 here',
//   service3: 'set your service3 here',
//   service4: 'set your service4 here'
// }

