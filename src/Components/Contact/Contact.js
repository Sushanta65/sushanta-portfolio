import React, { useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './Contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [status, setStatus] = useState('')
    const sendEmail = (e) => {
       
        e.preventDefault();

        emailjs.sendForm('service_idv3dyl', 'template_lfrg7v3', e.target, 'user_1g8k0knU1btEWOAgUQ5E9')
          .then((result) => {
              const sendStatus = 'Your Message Send Successfully!'
              setStatus(sendStatus)
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <div>
            <Navbar></Navbar>
            <div id="contactSection">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="awesomeHeader text-center py-5">
                                <h3 className="text-uppercase">Contact Me</h3>
                                <hr />
                                <p>You can contact me via email. Contact me anytime.</p>
                                <h5 style={{color: 'green'}}>{status}</h5>
                            </div>
                            
                        </div>
                    </div>
                        <div className="formSection">
                            <div className="form-area w-75 m-auto text-center">
                                <form onSubmit={sendEmail}>
                                    <input className="form-control mb-3" type="text" name="name" placeholder="Name" required/>
                                    <input className="form-control mb-3" type="text" name="email" placeholder="Email" required/>
                                    <input className="form-control mb-3" type="text" name="subject" placeholder="Subject"/>
                                    <textarea className="form-control mb-3" name="message" cols="30" rows="10" required></textarea>
                                    <input className="btn btn-danger" type="submit" value="Send Message"/>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;