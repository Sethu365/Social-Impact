import React from 'react';
import './Contact.css'; 

const Contact = () => (
  <main className="container">
    <h1 className="title">Contact Us</h1>
    <p className="description">Get in touch with us for more information or support.</p>
    
    <form className="form">
      <div className="form-group">
        <label htmlFor="name" className="label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="subject" className="label">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message" className="label">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="textarea"
          required
        ></textarea>
      </div>

      
      <div className="button-container">
        <button
          type="submit"
          className="button"
        >
          Send
        </button>
      </div>
    </form>
  </main>
);

export default Contact;
