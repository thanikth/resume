import React from 'react'
import './aboutme.css'
import imageAbout from '../../img/aboutme.jpeg'

function Aboutme() {
    return (
        <div className="aboutme" id="about">
            <div className="aboutme-con">
                <div className="about-text">
                    <div className="about-head-text">
                        <p>About me</p>
                    </div>
                    <div className="info">
                        <h2>My nickname is Got.
                            Date of birth is 02 October 1998.
                            I'm graduated information technology from Kasetsart University.
                            I like to do about frontend because It can communicate with users to visualize
                            what we want, and it keeps users coming back like magic.
                            I having good relationship ,good team player
                            ,detail-oriented, positive attitude and open mind.</h2>
                    </div>
                </div>
                <div className="aboutme-img">
                    <img src={imageAbout} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Aboutme