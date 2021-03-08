
import React, { useEffect } from "react";
import './App.css';
import Navbar from "./component/Navbar"
import Home from './component/Home'
import About from './component/About'
import Offers from './component/Offers'
import Menu from './component/Menu'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {
  return (
    <div className="App">
      
      
      <Navbar/>
     
      
       <Home/>
      <About/>
     <Offers/>
       <Menu/>
       <Contact/>
       <Footer/>
     
    </div>
  );
}

export default App;
