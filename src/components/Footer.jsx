import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer() {
  return (
    <div>
    <span className='navBar-social'>
    <div>
      <a className="nav-link fixed-bottom d-flex justify-content-center" href="#linkedin"><FaGithub /></a>
      <a className="nav-link fixed-bottom d-flex justify-content-center" style={{marginRight: "35px"}} href="#github"><FaLinkedin /></a>
      <a className="nav-link fixed-bottom d-flex justify-content-center" style={{marginLeft: "35px"}} href="#instagram"><FaInstagram /></a>
      </div>
    </span>
    </div>
    //
    //
  )
}

export default Footer