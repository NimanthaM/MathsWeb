import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setIsOpen(!isOpen)

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/' && !location.hash
        }
        return location.pathname === path
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-wrapper">
                    <Link to="/" className="logo">
                        <img src="/favicon.svg" alt="Logo" className="logo-icon" />
                        <span className="logo-text"><span className="logo-highlight">A+</span> Maths <span style={{ color: 'var(--light-gray)' }}>with</span> <img src="/images/name.jpg" alt="Nimantha Madhushan" className="name-image" /></span>
                    </Link>

                    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <Link
                            to="/"
                            className={`nav-link ${isActive('/') ? 'active' : ''}`}
                            onClick={(e) => {
                                setIsOpen(false);
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/#classes"
                            className="nav-link"
                            onClick={(e) => {
                                setIsOpen(false);
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Classes
                        </Link>
                        <Link
                            to="/#projects"
                            className="nav-link"
                            onClick={(e) => {
                                setIsOpen(false);
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    document.querySelector('.projects-section')?.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            Projects
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
