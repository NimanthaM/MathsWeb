import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaCalculator, FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <FaCalculator className="logo-icon" />
            <span className="logo-text">Maths<span className="logo-highlight">Web</span></span>
          </Link>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/classes" 
              className={`nav-link ${isActive('/classes') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Classes
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
