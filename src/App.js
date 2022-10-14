import React, { useState, useEffect } from 'react'
import Particle from "./components/Particle";
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Card from "./components/Card";
import Experience from './components/Experience';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ref, listAll, getDownloadURL} from 'firebase/storage'
import {db} from "./Firebase";


//the above import is needed for the bootstrap is crucial 

function App() {

  const [info, setInfo] = useState([]);
  const [image, setImage] = useState([]);
  const [brief, setBrief] = useState([])
   
  
  useEffect( () => {
   fetchAPI();
   
   }, [])

   useEffect( () => {
    listAll(imageRef)
   .then((response) =>{
    response.items.forEach((item) => {
      getDownloadURL(item)
      .then((url) => {
        setImage((prev) => [...prev, url]);
        console.log(url)
      })
    })
   })
   
   }, [])

     
  useEffect( () => {
    fetchAPI();
    
    }, [])
 
    // useEffect( () => {
    //  listAll(dataRef)
    // .then((response) =>{
    //  response.items.forEach((item) => {
    //    getDownloadURL(item)
    //    .then((url) => {
    //      setBrief((prev) => [...prev, url]);
    //    })
    //  })
    // })
    
    // }, [])


   //here we setup firebase
   const imageRef = ref(db, "images/");
   const dataRef = ref(db, 'stringData/');
   

  // useEffect(() => {
  //   document.body.style.zoom = "30%";
  // }, []);

  function fetchAPI(){
    const API = " http://localhost:3000/user"
    fetch(API)
    .then( response => {
      return response.json();
    })
    .then(
      (api) => {
        setInfo(api);
    }
    )
    .catch(
      err => {
        console.log("ERROR CAUGHT: resolve");
      }
    )
  }


  return (
    <div>
      <Particle />
      <NavigationBar />
      <Header />
      <Card 
        info={info}
        key={info.id}
      />
      <div>
         {/* <button className='btn' onClick={fetchAPI}>Click</button> */}
      </div> 
      <Experience 
        image = {image}
        brief = {brief}
      />
      <Experience 
        image = {image}
        brief = {brief}
      />
      <div style={{'width': '1000px', 'height': '1000px'}}></div>
      <Footer />
      
      
    </div>
  )
}

export default App;