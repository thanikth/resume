import React, { useState } from 'react'
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import './navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobile = () => setClick(false)
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-con'>
                    <div className="logo">
                        <a href="#">SrGot <FiUser /></a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className='menu-link' onClick={closeMobile}>
                            <a href="#">ABOUT</a>
                        </li>
                        <li className='menu-link' onClick={closeMobile}>
                            <a href="#">SKILL</a>
                        </li>
                        <li className='menu-link' onClick={closeMobile}>
                            <a href="#">WORK</a>
                        </li>
                        <li className='menu-link' onClick={closeMobile}>
                            <a href="#">EDUCATION</a>
                        </li>
                        <li className='menu-link' onClick={closeMobile}>
                            <a href="#">CONTACT</a>
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