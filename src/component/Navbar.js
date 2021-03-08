import React, { useState } from 'react'

import { animateScroll as scroll, Link } from "react-scroll";

import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const [navClicked, setNavClicked] = useState(false);

    const closeMobileMenu = () => setClick(false);

    const changeNav = () => {
        if (window.scrollY >= 100) {
            setClick(true);
        } else {
            setClick(false);
        }
    };
    window.addEventListener("scroll", changeNav);
    return (
        <div className={click ? "nav-container active" : "nav-container"}>
            <nav className="navbar active">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        BurgerBoY <i className="fab fa-type3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={navClicked ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-iteam">
                            <Link activeClass="active"
                                to="home"
                                className='nav-links'
                                onClick={closeMobileMenu}
                                spy={true}
                                smooth={true}
                                delay={100}
                                offset={0}
                                duration={500}
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="nav-iteam">
                            <Link to="about"  className='nav-links'
                                

                                spy={true}
                                smooth={true}
                                delay={100}
                                offset={0}
                                duration={500}

                                onClick={closeMobileMenu}

                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-iteam">
                            <Link to='offers' className='nav-links' onClick={closeMobileMenu}
                                spy={true}
                                smooth={true}
                                delay={100}
                                offset={0}
                                duration={500}
                            >
                                OFFERS
                            </Link>
                        </li>
                        <li className="nav-iteam">
                            <Link
                                className='nav-links'
                                onClick={closeMobileMenu}
                                activeClass="active"
                                to="menu"
                                spy={true}
                                smooth={true}
                                delay={100}
                                offset={0}
                                duration={500}
                            >
                                MENU
                            </Link>
                        </li>
                        <li className="nav-iteam">
                            <Link activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                delay={100}
                                offset={0}
                                duration={500} className='nav-links' onClick={closeMobileMenu} >
                                CONTACT
                            </Link>
                        </li>
                    </ul>

                </div>

            </nav>
        </div>
    )
}

export default Navbar
