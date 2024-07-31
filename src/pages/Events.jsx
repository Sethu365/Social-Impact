import React from 'react';
import './Events.css'; 

const Events = () => (
  <main className="container">
    <h1 className="title">Events</h1>
    <p className="description">Stay updated on upcoming events and activities. Participate in or organize events to support local causes.</p>
    
    <form className="form">
      <div className="form-group">
        <label htmlFor="eventName" className="label">Event Name:</label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="eventDate" className="label">Date:</label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="eventLocation" className="label">Location:</label>
        <input
          type="text"
          id="eventLocation"
          name="eventLocation"
          className="input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="eventDescription" className="label">Description:</label>
        <textarea
          id="eventDescription"
          name="eventDescription"
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
          Submit
        </button>
      </div>
    </form>
  </main>
);

export default Events;
