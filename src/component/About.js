import React,{ useEffect } from 'react'
import about from './images/about.jpg'
import useWebAnimations from "@wellyshen/use-web-animations";
import AOS from "aos";
import './About.css'
import "aos/dist/aos.css";
function About() {
  AOS.init({
    offset:1000,
    duration:1000,
  });
      

      

    return (
        <div id="about">
            <div className="about-container" >
                <img data-aos="flip-left"  className="abt-img" src={about} alt=""/>
                <div data-aos="fade-down-left" className="writtig" >
                <h1 className="h">Delivering best ingredients for our trusty food lovers</h1>
                <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                </div>
            </div>
        </div>
    )
}

export default About
