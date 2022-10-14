import React from 'react'
import Particle from "./components/Particle";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
//the above import is needed for the bootstrap is crucial 

function App() {
  return (
    <div>
      <Particle />
      <NavigationBar />
      <Header />
      <Footer />
      
    </div>
  )
}

export default App