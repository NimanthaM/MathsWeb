import { Link } from 'react-router-dom'
import { FaGraduationCap, FaBook, FaTrophy, FaUsers, FaChalkboardTeacher, FaClock } from 'react-icons/fa'
import './Home.css'

function Home() {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: 'Expert Guidance',
      description: 'Learn from experienced educators with proven track records in mathematics education.'
    },
    {
      icon: <FaBook />,
      title: 'Comprehensive Curriculum',
      description: 'Complete coverage of grades 6-11 (O/L) mathematics syllabus with structured lessons.'
    },
    {
      icon: <FaTrophy />,
      title: 'Proven Results',
      description: 'Our students consistently achieve excellent grades and develop strong mathematical foundations.'
    },
    {
      icon: <FaUsers />,
      title: 'Small Class Sizes',
      description: 'Personalized attention with limited students per class for optimal learning outcomes.'
    },
    {
      icon: <FaChalkboardTeacher />,
      title: 'Interactive Sessions',
      description: 'Engaging teaching methods with practice problems and real-world applications.'
    },
    {
      icon: <FaClock />,
      title: 'Flexible Timings',
      description: 'Multiple class schedules available to fit your academic calendar and commitments.'
    }
  ]

  const grades = [
    { grade: 'Grade 6-7', description: 'Foundation building and concept introduction' },
    { grade: 'Grade 8-9', description: 'Advanced concepts and problem-solving skills' },
    { grade: 'Grade 10-11', description: 'O/L preparation and exam techniques' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content fade-in-up">
            <h1 className="hero-title">
              Master Mathematics with
              <span className="hero-highlight"> Expert Guidance</span>
            </h1>
            <p className="hero-description">
              Professional mathematics tutoring for grades 6-11 (O/L). 
              Build strong foundations, develop problem-solving skills, and achieve excellence.
            </p>
            <div className="hero-buttons">
              <Link to="/classes" className="btn">Explore Classes</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Why Choose MathsWeb?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grades Section */}
      <section className="section grades-section">
        <div className="container">
          <h2 className="section-title">Classes We Offer</h2>
          <div className="grades-grid">
            {grades.map((item, index) => (
              <div key={index} className="grade-card card">
                <div className="grade-number">{index + 1}</div>
                <h3 className="grade-title">{item.grade}</h3>
                <p className="grade-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Excel in Mathematics?</h2>
            <p className="cta-description">
              Join our classes today and experience the difference expert guidance makes in your mathematical journey.
            </p>
            <Link to="/contact" className="btn">Get Started Now</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
