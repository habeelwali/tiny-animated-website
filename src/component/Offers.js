import React from 'react'
import './Offers.css'
import offer from './images/offer.jpg'
import bg from './images/bg.png'

function Offers() {


    return (
        <div className="off-conatiner" id="offers">
            <div className="offers">
                <h1 className="hidding">Special offers</h1>
                <img
                    data-aos="zoom-in-up"
                  
                      data-aos-offset="1200"
                    className="off-img"
                    src={offer} alt="" />
                <h1 className="food-name">Ham Sandwich</h1>
                <div classname="button-container">
                    <button className="button">fat 26g</button>
                    <button className="button">sugar 36g</button>
                    <button className="button">carbs 26g</button>
                </div>
                <p className="op">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <h3 className="price">$ 14</h3>
            </div>
            <div>


            </div>
            <div className="offers2">

                <img
                    className="off-img2" src={bg}
                    data-aos="zoom-in-up"
                    data-aos-offset="1200"
                    alt="" />
                <h1 className="food-name">Ham Burger</h1>
                <div classname="button-container">
                    <button className="button">fat 26g</button>
                    <button className="button">sugar 36g</button>
                    <button className="button">carbs 26g</button>
                </div>
                <p className="op">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                <h3 className="price">$ 18</h3>
            </div>
            <div>


            </div>
        </div>
    )
}

export default Offers
