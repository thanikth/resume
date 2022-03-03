import React, { useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

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
                    test
                </div>
                <form onSubmit={sendEmail}>
                    <div className="form-con">
                        <label>Subject</label>
                        <input className='item' type="text" name="subject" required />
                        <br />

                        <label>Name</label>
                        <input className='item' type="text" name="from_name" required />
                        <br />

                        <label>Email</label>
                        <input className='item' type="text" name="from_email" required />
                        <br />

                        <label>Message</label>
                        <textarea name="message" />
                        <br />
                    </div>
                    <input type="submit" value="Submit" />
                    <div className="label-submit">{result ? <p>test</p> : null}</div>
                </form >
            </div>

        </div >
    )
}

export default Contact