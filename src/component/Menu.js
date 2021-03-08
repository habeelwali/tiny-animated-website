import React from 'react'
import menu from './images/menu.png'
import menu2 from './images/menu2.png'
import './Menu.css'
function Menu() {
    return (
        <div>
            <div id="menu">

            <div className="menu-container">

                <img className="mun-img" src={menu} alt=""/>
                <div className="menu-writtig"  
                 data-aos="fade-left" 
                data-aos-duration="5500"
                data-aos-offset="1600"
                >
                    <button className="btn">-25% OFF</button>
                <h1 className="h">Enjoy our specially prepared burgers for you</h1>
                <p className='p'>Dont miss out on our daily special offers</p>
                <button className="btn2">SEE Menu</button>
                </div>
            </div>
            <div className="menu-container2">
            <div className="menu-writtig2"
             data-aos="fade-right" 
             data-aos-duration="5500"
             data-aos-offset="1600"
            >
            <button className="btn">-25% OFF</button>
                <h1 className="h">New, amazing sandwich offers every day</h1>
                <h2 className='p'>Just add some of our juicy side dishes.</h2>
                <button className="btn2">SEE Menu</button>
                </div>
                <img className="mun-img2" src={menu2} alt=""/>
              
            </div>
        </div>
        </div>
    )
}

export default Menu
