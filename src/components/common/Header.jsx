import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-transparent mainNavbar">
  <a className="navbar-brand" href="/">My Website</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link text-dark" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/about">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/services">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="/contact">Contact Us</a>
      </li>
    </ul>
  </div>

  <div className="social-media-icons d-flex justify-content-between align-items-center">
    <a href="#">
     <img src="instagram.png" alt="Instagram" />
    </a>
    <a href="#">
     <img src="youtube.png" alt="Youtube" />
    </a>
    <a href="#">
     <img src="facebook.png" alt="Facebook" />
    </a>
  </div>
</nav>

    </header>
  );
}

export default Header;
