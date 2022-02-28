import React from 'react'
import './skill.css'
import './wave.css'
import { FcApproval } from "react-icons/fc";

function Skill() {
    return (
        <div className="skill" id='/skill'>
            <div className="skill-con">
                <div className="skill-card">
                    <div className="skill-front">
                        <div className="title">
                            <p>Frontend Skill</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />HTML</h3>
                            <p>Experienced</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />CSS</h3>
                            <p>Experienced</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />JavaScript</h3>
                            <p>Experienced</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />Bootstrap</h3>
                            <p>Experienced</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />Angular</h3>
                            <p>Basic</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />React</h3>
                            <p>Intermediate</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />Vue</h3>
                            <p>Intermediate</p>
                        </div>
                    </div>
                </div>
                <div className="skill-card">
                    <div className="skill-back">
                        <div className="title">
                            <p>Backend Skill</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />Node JS</h3>
                            <p>Intermediate</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />Java</h3>
                            <p>Intermediate</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />Laravel</h3>
                            <p>Basic</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />MongoDB</h3>
                            <p>Basic</p>
                        </div>
                        <div className='item'>
                            <h3><FcApproval className='icon' size={20} />MySQL</h3>
                            <p>Experienced</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
        </div>
    )
}

export default Skill