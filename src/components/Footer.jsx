import { Link } from 'react-router-dom'
import { FaFacebook, FaWhatsapp, FaEnvelope, FaPhone, FaCalculator } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaCalculator className="footer-logo-icon" />
              <span className="footer-logo-text">Maths<span className="logo-highlight">Web</span></span>
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
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <FaPhone className="contact-icon" />
                <span>+94 XX XXX XXXX</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>info@mathsweb.com</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} MathsWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
