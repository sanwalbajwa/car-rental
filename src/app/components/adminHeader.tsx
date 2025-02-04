'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3 shadow-lg user">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div>
          <img
            src="/images/car.png" // Replace with your logo image path
            alt="Logo"
            style={{ height: '50px' }} // Adjust size of logo
          />
        </div>

        {/* Navbar Section */}
        <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between w-100" id="hamburger">
          {/* Hamburger Button */}
          <button
            className="navbar-toggler d-lg-none" // Show only on mobile screens
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="./addCar" className="nav-link text-white fw-bold px-3">
                  Add Car
                </a>
              </li>
              <li className="nav-item">
                <a href="./viewCar" className="nav-link text-white fw-bold px-3">
                  View Car
                </a>
              </li>
              <li className="nav-item">
                <a href="./viewBookings" className="nav-link text-white fw-bold px-3">
                  Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Button Section (Hidden on mobile) */}
          <div className="d-none d-lg-block">
            <a
              href="/"
              className="btn btn-light text-dark fw-bold px-4 py-2 rounded-pill"
              style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            >
              Logout
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}