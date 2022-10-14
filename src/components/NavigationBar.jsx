import React from "react";  
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icon1 from "../components/img/linkedin-svgrepo-com.svg";
import icon2 from "../components/img/github-svgrepo-com.svg";
import icon3 from "../components/img/instagram-svgrepo-com.svg";


function NavigationBar () {


    //to know where the hell you are
    const [place, setPlace] = useState("home")
    //intial effects will change when you start scrolling
    const [scroll, setScroll] = useState(false)
    //to detect when you scroll
   

  //navbar-dark => color is white and navbar-light => font color is black
  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Container style={{padding: "5px"}}>
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#HOME">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#skills">Skills</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#experience">Experience</a>
      </li>
    </ul>
    
  </div>
  </Container>
</nav>
    </div>
  )
  } 
  // <a href="" ><img src={icon1}></ img></a>

export default NavigationBar;