import React, { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import iconGmail from '../../img/gmail.png'
import iconPhone from '../../img/phone.png'

function Contact() {
    const [result, setResult] = useState(false)
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hx7rpfu', 'template_ip803gk',
            e.target, '3pDSd95CJinMKO2mo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true)
    }

    setTimeout(() => {
        setResult(false);
    }, 5000)
    return (
        <div className="contact" id='contact'>
            <div className="contact-con">
                <div className="my-contact">
                    <div className="my-contact-con">
                        {/* <img src={imgContact} alt="" /> */}
                        <div className="info-contact">
                            Contact
                        </div>
                        <div className="info-contact">
                            <img src={iconPhone} alt="" />
                            <a href="tel:+66802083199">0802083199</a>
                        </div>
                        <div className="info-contact">
                            <img src={iconGmail} alt="" />
                            <a href="mailto:got321007@gmail.com">got321007@gmail.com</a>
                        </div>
                    </div>
                </div>
                <form onSubmit={sendEmail}>
                    <div className="form-con">
                        <div className="title-contact-mobile">
                            <h2>Contact</h2>
                            <br />
                        </div>
                        <h3>Subject</h3>
                        <input className='item' type="text" name="subject" />
                        <br />

                        <h3>Name *</h3>
                        <input className='item' type="text" name="from_name" required />
                        <br />

                        <h3>Email *</h3>
                        <input className='item' type="email" name="from_email" required />
                        <br />

                        <h3>Message *</h3>
                        <textarea name="message" required />
                        <br />
                    </div>
                    <button>Submit</button >
                    <div className="label-submit">{result ? <p>test</p> : null}</div>
                </form >
                <div className="mail">
                </div>
                <div className="mail">
                </div>
                <div className="top-mail">
                </div>
                <div className="top-mail">
                </div>
            </div>


        </div >
    )
}

export default Contact