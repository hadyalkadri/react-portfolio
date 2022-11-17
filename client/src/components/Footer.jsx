import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

function Footer({skill, exp}) {
  let iconStyles = {
    fontSize: '25px'                      
}
  
  return (
    <div className={exp ? `footerExperience` : null}>
    <span className='footerMain'>
    <div className={skill ? `footer` : `footerSkills`}>

      <a href='https://github.com/hadyalkadri' target="_blank"><FaGithub style={iconStyles} className='icons' /></a>
      <a href='https://www.linkedin.com/in/hady-alkadri-7813ab18b/' target="_blank"><FaLinkedin  style={iconStyles} className='icons' /></a>
      <a href='https://www.instagram.com/hadyalkaderi/' target="_blank"><FaInstagram style={iconStyles} className='icons' /></a>
      
      

    </div>
    </span>
    </div>
  )
}

export default Footer

{/* <a className="nav-link fixed-bottom d-flex" style={{marginLeft: "575px"}} href="https://github.com/hadyalkadri"><FaGithub /></a>
<a className="nav-link fixed-bottom d-flex" style={{marginLeft: "635px"}} href="https://www.linkedin.com/in/hady-alkadri-7813ab18b/"><FaLinkedin /></a>
<a className="nav-link fixed-bottom d-flex" style={{marginLeft: "695px"}} href="https://www.instagram.com/hadyalkaderi/"><FaInstagram /></a>
</div> */}