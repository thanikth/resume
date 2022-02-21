import React from 'react'
import './aboutme.css'
import imageAbout from '../../img/aboutme.jpeg'

function aboutme() {
    return (
        <div className="aboutme">
            <div className="aboutme-con">
                <div className="about-text">
                    <div className="about-head-text">
                        <p>About me</p>
                    </div>
                    <div className="info">
                        <h2>My nickname is Got.
                            Date of birth is 02 October 1998.
                            Hobbies is playing basketball ,listening to Music and playing game.
                            I having pleasant personality , good relationship ,good team player
                            ,detail-oriented , good command of computer skills (MS Office and Internet)
                            , positive attitude and open mind.</h2>
                    </div>
                </div>
                <div className="aboutme-img">
                    <img src={imageAbout} alt="" />
                </div>
            </div>
        </div>
    )
}

export default aboutme