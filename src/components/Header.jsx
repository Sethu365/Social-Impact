import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <button className="navbar-toggler" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        <ul className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/volunteers">Volunteers</Link>
          </li>
          <li>
            <Link to="/charities">Charities</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
