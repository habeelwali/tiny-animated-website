import React,{useRef} from 'react'
import './Home.css';
import abc from './images/barger.png'
import Parallax from 'react-rellax'
import useWebAnimations,{rubberBand} from "@wellyshen/use-web-animations";
function Home() {
    const { keyframes, timing } = rubberBand;

    const { ref } = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        iterations: 1,
        duration: 1500,
        
      },
    });
    return (
        <div className="container" >
         
            <div id="home">
            <div className="header"> 
          
            <h1 className="h1">CRISPY </h1>
            
            <h1 className="internal">TENDIR </h1>
            </div>

           
            <h1 className="bur"  >BURGUR </h1>
            <Parallax speed={-2}>
            <img className="img" ref={ref} src={abc}/>
            
            </Parallax>
            <button className="home-btn">SEE Menu</button>
            </div>
          
        </div>
    )
}

export default Home
