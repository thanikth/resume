import React from 'react'
import './head.css'
import imageProfile from '../../img/im.jpg'
import ReactTypingEffect from 'react-typing-effect';

function head() {
    return (
        <div className="head">
            <div className="head-con">
                <div className="circle-img"></div>
                <div className="head-img">
                    <img src={imageProfile} alt="" />
                </div>
                <div className="head-text">
                    <h1>Hello, I'm</h1>
                    <p>Thanik Thamamnuisuk</p>
                    <ReactTypingEffect text={'interested in Front End Developer.'}
                        speed={80} eraseSpeed={80} className="typing-effect" />
                </div>
            </div>
        </div>
    )
}

export default head