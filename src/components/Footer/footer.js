import React from 'react'
import './footer.css'
import iconGmail from '../../img/gmail.png'
import iconPhone from '../../img/phone.png'

function Footer() {
    return (
        <footer>
            <div className="footer-con">
                <div className="contact-footer">
                    <div className="info-footer">
                        <h2>Contact</h2>
                    </div>

                    <div className="info-footer">
                        <img src={iconPhone} alt="" />
                        <a href="tel:+66802083199">0802083199</a>
                    </div>
                    <div className="info-footer">
                        <img src={iconGmail} alt="" />
                        <a href="mailto:got321007@gmail.com">got321007@gmail.com</a>
                    </div>
                </div>

                <br />
                <br />

                <div className="footer-aboutme">
                    <h5>Copyright © 2022 Thanik Thamamnuisuk</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer