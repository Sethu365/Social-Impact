import React from 'react';
import './Volunteers.css'; 

const Volunteers = () => {
  return (
    <main className="container">
    <h1 className="title">Volunteers</h1>
    <p className="description">Join our community of volunteers and make a difference. Register to find opportunities to help local charities.</p>
    
      
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
          <label htmlFor="skills" className="label">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            rows={4}
            className="textarea"
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="availability" className="label">Availability:</label>
          <input
            type="text"
            id="availability"
            name="availability"
            className="input"
            required
          />
        </div>
        
        <div className="button-container">
          <button
            type="submit"
            className="button"
          >
            Register
          </button>
        </div>
      </form>
    </main>
  );
};

export default Volunteers;
