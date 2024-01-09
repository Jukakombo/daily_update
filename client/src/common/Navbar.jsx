import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "../index.css";

const loginLogoutText = "Login";
const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <div className="navbar">
      <div className="containerNav">
        <NavLink to="/AuthForm">
          <img src="/logo.png" alt="Your Logo" className="logo-image" />
        </NavLink>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/user" className="nav-link">
              User
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin_page" className="nav-link">
              Admin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/auth_form" className="nav-link">
              {loginLogoutText}
            </NavLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>

        {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Navbar;
