import React from 'react';
import './Charities.css'; 

const Charities = () => (
  <main className="container">
    <h1 className="title">Charities</h1>
    <p className="description">Discover local charities and learn how you can help.</p>
    
    <form className="form">
      <div className="form-group">
        <label htmlFor="charityName" className="label">Charity Name:</label>
        <input
          type="text"
          id="charityName"
          name="charityName"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="charityEmail" className="label">Email:</label>
        <input
          type="email"
          id="charityEmail"
          name="charityEmail"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="charityDescription" className="label">Description:</label>
        <textarea
          id="charityDescription"
          name="charityDescription"
          rows={2}
          className="textarea"
          required
        ></textarea>
      </div>
      
      <div className="form-group">
        <label htmlFor="contact" className="label">Contact Info:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          className="input"
          required
        />
      </div>

      
      <div className="button-container">
        <button
          type="submit"
          className="button"
        >
          Submit
        </button>
      </div>
    </form>
  </main>
);

export default Charities;
