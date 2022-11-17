import React from 'react';
import Typed from "react-typed";
import Contact from './Contact';
import { useRef} from 'react';


const Header = ({about}) => {
    const button = useRef();
    

  return (
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
                <a href='https://github.com/hadyalkadri' target="_blank" rel="noreferrer noopener" ref={button} className='viewme-btn'>View My Work</a>
            </div>
            <div className='about'>
            {about.map((sth, index) => (
                    <div className='about-me' key={index}>
                        <div className='grid-item grid-item-1'>
                            <img className='about-image' src={sth.avatar} />
                        </div>
                        <div className='grid-item grid-item-2'>
                            <h3 className='about-title'>About</h3>
                            <p className='about-details'>
                            I'm Hady, a web developer with the passion for music.<br />
                            I am an experienced Front-end developer using different technoloies.<br />
                            I made this website to express my love for the industry.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <Contact />
        </div>
  )
}

export default Header;