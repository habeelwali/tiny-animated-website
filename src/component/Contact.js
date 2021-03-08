import React from 'react'
import con from './images/con.jpg'
import insta1 from './images/insta1.jpg'
import insta2 from './images/insta2.jpg'
import inta3 from './images/inta3.jpg'
import inta4 from './images/inta4.jpg'
import './Contact.css'
function Contact() {
    return (
        <div id="contact">
        <div className="cont-container" >
            <img className="cont-img" src={con} alt=""/>
            <div className="cont-writtig">
                <button className="con-btn">TESTIMONIALS</button>
            <h1 className="h">What our clients have to say</h1>
            <p className='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
           
        </div>
            <div className="cont-grd">
            <img src={insta1}/>
            <img  src={insta2}/>
            <img src={inta3}/>
            <img src={inta4}/>
            </div>
    </div>

    )
}

export default Contact
