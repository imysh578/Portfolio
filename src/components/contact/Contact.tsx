import React, { FormEvent, MutableRefObject, useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookMessenger} from "react-icons/fa"
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    console.log(e.target);
    
    emailjs.sendForm('service_c3m116t', 'template_vzuf7u6', form.current, '8YhIMyoJV0NphKBpR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    (e.target as HTMLFormElement).reset();
  };

  return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className='contact__option-icon'/>
						<h4>Email</h4>
						<h5>imysh578@gmail.com</h5>
						<a href="mailto:imysh578@gmail.com" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<BsInstagram className='contact__option-icon'/>
						<h4>Instagram</h4>
						<h5>_sokuri</h5>
						<a href="https://www.instagram.com/_sokuri/" target="_blank">
							My Profile
						</a>
					</article>
					<article className="contact__option">
						<FaFacebookMessenger className='contact__option-icon'/>
						<h4>Facebook</h4>
						<h5>Seokhun Yoon</h5>
						<a href="https://www.facebook.com/seokhun.yoon.31/" target="_blank">
							My Profile
						</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Full Email' required />
          <textarea name="message" rows={7} placeholder='Your Full Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
			</div>
		</section>
	);
}

export default Contact