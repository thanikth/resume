import React, { useState } from 'react'
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import './navbar.css'
import { Link } from 'react-scroll'

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobile = () => setClick(false)
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-con'>
                    <div className="logo">
                        <Link to="home" path="/home" smooth={true} duration={800}>
                            SrGot <FiUser />
                        </Link>

                    </div>
                    <ul className={click ? "menu active" : "menu"}>

                        <li className='menu-link'>
                            <Link to="about" onClick={closeMobile}
                                smooth={true} duration={1000}>
                                ABOUT
                            </Link>
                        </li>

                        <li className='menu-link'>
                            <Link to="skill" onClick={closeMobile}
                                smooth={true} duration={1000}>
                                SKILL
                            </Link>
                        </li>
                        <li className='menu-link' >
                            <Link to="work" onClick={closeMobile}
                                smooth={true} duration={1000}>
                                WORK
                            </Link>
                        </li>
                        <li className='menu-link'>
                            <Link to="work" onClick={closeMobile}
                                smooth={true} duration={1000}>
                                EDUCATION
                            </Link>
                        </li>
                        <li className='menu-link'>
                            <Link to="work" onClick={closeMobile}
                                smooth={true} duration={1000}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar