import React from "react";
import logoNav1 from "../logoNav1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
      
        <a className="navbar-brand" href="#"><img className="logo" src={logoNav1} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color: '#fff'}} />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto ">
            <li className="nav-item ">
              <a className="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Bio Saya</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">layanan</a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link" href="#">Cara kerja</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kontak</a>
            </li>
          </ul>
        
        </div>
      </div>
    
    </nav>
  )
};

export default Navbar;
