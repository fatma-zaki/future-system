import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from './../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div
        className="menu-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
