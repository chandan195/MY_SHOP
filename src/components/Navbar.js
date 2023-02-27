import React, { useState } from "react";
import "./css/navbar.css";
import { IoIosMenu } from "react-icons/io";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="./fev.jpg" alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <IoIosMenu />
          {/* <Hamburger /> */}
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/LogIn" className="icon">
                <IoPersonOutline className="cart-trolly" />
                <span className="login">ProFile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Cart" className="icon">
                <IoCartOutline className="cart-trolly" />
                <span className="cart-total-item">10</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
