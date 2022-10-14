import React from 'react';
import Typed from "react-typed";


const Header = () => {
  return (
    <div>
        <div className='header-container'>
            <div className='header-intro'>
                <h1>
                    Hello, <br />Welcome to my portfolio!
                </h1>
                <Typed 
                    className='typed-text'
                    strings={["Services: ","Web Development", "Music Compostion","SAP Consultancy", "ERP Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href='https://github.com/hadyalkadri' target="_blank" rel="noreferrer noopener" className='viewme-btn'>View My Work</a>
            </div>
        </div>
    </div>
  )
}

export default Header;