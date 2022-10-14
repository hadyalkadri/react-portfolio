import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div>
    <span className='footerMain'>
    <div>
      <a className="nav-link fixed-bottom d-flex" style={{marginLeft: "575px"}} href="https://github.com/hadyalkadri"><FaGithub /></a>
      <a className="nav-link fixed-bottom d-flex" style={{marginLeft: "635px"}} href="https://www.linkedin.com/in/hady-alkadri-7813ab18b/"><FaLinkedin /></a>
      <a className="nav-link fixed-bottom d-flex" style={{marginLeft: "695px"}} href="https://www.instagram.com/hadyalkaderi/"><FaInstagram /></a>
    </div>
    </span>
    </div>
  )
}

export default Footer