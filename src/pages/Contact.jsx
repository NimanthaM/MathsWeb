import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaClock } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your interest! We will contact you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        grade: '',
        message: ''
      })
      
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+94 XX XXX XXXX',
      link: 'tel:+94XXXXXXXXX'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      content: '+94 XX XXX XXXX',
      link: 'https://wa.me/94XXXXXXXXX'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@mathsweb.com',
      link: 'mailto:info@mathsweb.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Colombo, Sri Lanka',
      link: '#'
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', time: '4:00 PM - 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 1:00 PM' }
  ]

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title fade-in-up">Get In Touch</h1>
          <p className="page-subtitle fade-in">We're here to help you excel in mathematics</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-description">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="grade">Grade/Class *</label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Grade</option>
                    <option value="grade-6">Grade 6</option>
                    <option value="grade-7">Grade 7</option>
                    <option value="grade-8">Grade 8</option>
                    <option value="grade-9">Grade 9</option>
                    <option value="grade-10">Grade 10</option>
                    <option value="grade-11">Grade 11 (O/L)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements or any questions you have..."
                  ></textarea>
                </div>

                {submitMessage && (
                  <div className="submit-message success">
                    {submitMessage}
                  </div>
                )}

                <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-wrapper">
              <h2 className="info-title">Contact Information</h2>
              
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    className="contact-info-card"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="office-hours-card card">
                <div className="hours-header">
                  <FaClock className="hours-icon" />
                  <h3>Office Hours</h3>
                </div>
                <div className="hours-list">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="hour-item">
                      <span className="hour-day">{schedule.day}</span>
                      <span className="hour-time">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h3>Connect With Us</h3>
                <div className="social-buttons">
                  <a href="#" className="social-btn facebook">
                    <FaFacebook /> Facebook
                  </a>
                  <a href="#" className="social-btn whatsapp">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
