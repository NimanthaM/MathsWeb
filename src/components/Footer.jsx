import { Link } from 'react-router-dom'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src="/favicon.svg" alt="Logo" className="footer-logo-icon" />
                            <span className="footer-logo-text"><span className="logo-highlight">A+</span> <span style={{ color: 'var(--primary-orange)' }}>Maths</span> <span style={{ color: 'var(--light-gray)' }}>with</span> <img src="/images/name.jpg" alt="Nimantha Madhushan" className="name-image" /></span>
                        </div>
                        <p className="footer-description">
                            Professional mathematics tutoring for grades 6-11 (O/L).
                            Helping students excel in their mathematical journey with expert guidance.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/#classes">Classes</Link></li>
                            <li><Link to="/#projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Contact Info</h3>
                        <ul className="footer-contact">
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>+94 77 141 5855</span>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>nimantham.lk@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Follow Us</h3>
                        <div className="social-links">
                            <a href="https://web.facebook.com/profile.php?id=100081032823126" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://wa.me/94771415855?text=Hello!%20I%20have%20a%20question%20about%20A%2B%20Maths%20classes." target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                            <a href="mailto:nimantham.lk@gmail.com" className="social-link" aria-label="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} A+ Maths with Nimantha Madushan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
