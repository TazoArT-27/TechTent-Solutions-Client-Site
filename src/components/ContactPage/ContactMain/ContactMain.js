import React from 'react';
import "./ContactMain.css";
import * as emailjs from "emailjs-com";
import ChatIcon from '@material-ui/icons/Chat';
import TelegramIcon from '@material-ui/icons/Telegram';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ContactMain = () => {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('techtentsolutions', 'template_ur3r94t', e.target, 'user_YiZ6wrwB0LP8aRKuBmMUy')
        .then((result) => {
            Swal.fire({
                icon: 'success',
                title: 'Done',
                text: 'Message sent successfully',
              })
            //console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <main className="contact-main pt-5">
            <div className="container contact-container">
                <div className="row align-items-center contact-row">
                    <div className="col-md-5 offset-md-1 col-sm-10">
                        <h1 className="fw-bold">Let's Chat!<span className="ms-3"><ChatIcon className="svg_icons"></ChatIcon></span></h1>
                        
                        <h1 className="fw-bold">Tell Us About Your Idea.</h1>
                        <p>Let's create something together.</p>
                    </div>
                    <div className="col-md-5 offset-md-1 col-sm-10">
                        <form  onSubmit={sendEmail} className="contact-form p-5">
                            <div>
                                <h2 className="fw-bold mb-4">Send us a message<span className="ms-3"><TelegramIcon className="svg_icons"></TelegramIcon></span></h2>
                            </div>
                            <div className="mb-4">
                                <input name="name" type="text" className="form-control form-contact" placeholder="Full name*" required/>
                            </div>
                            <div className="mb-4">
                                <input name="email" type="email" className="form-control form-contact" placeholder="Email address*" required/>
                            </div>
                            <div className="mb-4">
                                <input name="subject" type="text" className="form-control form-contact" placeholder="Subject*" required/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Tell us more about your idea</label>
                                <textarea name="message" type="text" className="form-control form-contact"rows="3" required></textarea>
                            </div>
                            <div className="mb-4">
                                <button type="submit" className="btn btn-order text-white mb-3">Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactMain;