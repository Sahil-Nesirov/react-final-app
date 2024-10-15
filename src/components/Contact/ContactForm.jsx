import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="form-text">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="contact-form">
        <div className="form-left">
          <div className="contact-form-text">
            <div className="form-icon">
              <IoLocationSharp />
            </div>
            <div className="contact-icon-text">
              <h3>Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="contact-form-text">
            <div className="form-icon">
              <FaPhoneAlt />
            </div>
            <div className="contact-icon-text">
              <h3>Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="contact-form-text">
            <div className="form-icon">
              <BsClockFill />
            </div>
            <div className="contact-icon-text">
              <h3>Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className="form-right">
          <div className="contact-form-input">
            <div className="input-name-div">
              <label htmlFor="contact-name-input">Your Name</label>
              <input name="contact-name-input" id="contact-name-input" type="text" placeholder="abc" />
            </div>
            <div className="input-name-div">
              <label htmlFor="contact-email-input">Email Address</label>
              <input name="contact-email-input" id="contact-email-input" type="email" placeholder="example@gmail.com" />
            </div>
            <div className="input-name-div">
              <label htmlFor="input-subject">Subject</label>
              <input name="input-subject" id="input-subject" type="text" placeholder="This is an optional" />
            </div>
            <div className="input-name-div">
              <label htmlFor="contact-text-area">Message</label>
              <textarea name="contact-text-area" id="contact-text-area" cols="5" rows="5" placeholder="Hi! i’d like to ask about"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
