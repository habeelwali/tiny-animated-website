import React, { useState } from 'react'
import "./Footer.css"
function Footer() {
    const [email, setEmail] = useState("")
    const [loader, setLoader] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("thank you ")

        setEmail("");


    }



    return (
        <div className="footer-container">
            <div className="div1">
                <h1>BurgerBoY</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

            </div>
            <div className="div1">
                <h1>Contact</h1>
                <p>Street name 1, City</p>
                <a>+92 346 5560289</a>
                <a>email@companyname.com</a>
                <a>email@companyname.com</a>

            </div>
            <div className="div1">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Subscribe</h1>

                    <input placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button type="submit" style={{ background: loader ? "#ccc" : "red" }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Footer
