import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-cols-2">
      
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>

          <div className="contact-flex" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> <a href="mailto:xyz@gmail.com">ar2313077@gmail.com</a>
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <BsTelephone size={30} /> <a href="tel:+920210000000">+92 317-8593814</a>
          </div>
        </div>

        <div className="contact-space">
          <form className="form">
            <div className="form-name" data-aos="zoom-in-up">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="input-field"
                id="name"
                required
              />
            </div>
            <div className="form" data-aos="zoom-in-up">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="input-field"
                id="email"
                required
              />
            </div>
            <div className="form" data-aos="zoom-in-up">
              <label htmlFor="msg">Message</label>
              <textarea
                className="textarea-field"
                id="msg"
                rows={5}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="button"
              data-aos="zoom-in-up"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;