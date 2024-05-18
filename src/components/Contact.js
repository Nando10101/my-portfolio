// src/components/Contact.js
import React from 'react';
import FloatingHeader from './FloatingHeader';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <FloatingHeader>Contact</FloatingHeader>
      <div className="contact-content">
        <div className="contact-left">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Contact Information</h3>
          <p>Email: <a href="mailto:youremail@example.com">Fernandocerna94@csuf.fullerton.edu</a></p>
          <p>Phone: (951) 463-1177</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/fernando-cerna-a66b1a224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">My LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
