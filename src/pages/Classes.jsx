import { FaClock, FaUsers, FaCalendar, FaMapMarkerAlt, FaHeart, FaBook } from 'react-icons/fa'
import './Classes.css'

function Classes() {
  const classes = [
    {
      grade: 'Grade 6-7',
      level: 'Foundation Level',
      schedule: 'Saturdays 9:00 AM - 11:00 AM',
      students: 'Max 15 students',
      topics: ['Number Systems', 'Basic Algebra', 'Geometry Basics', 'Fractions & Decimals', 'Problem Solving'],
      price: 'Rs. 2,500/month'
    },
    {
      grade: 'Grade 8-9',
      level: 'Intermediate Level',
      schedule: 'Saturdays 2:00 PM - 4:00 PM',
      students: 'Max 15 students',
      topics: ['Advanced Algebra', 'Trigonometry', 'Statistics', 'Coordinate Geometry', 'Indices & Logarithms'],
      price: 'Rs. 3,000/month'
    },
    {
      grade: 'Grade 10-11 (O/L)',
      level: 'Advanced Level',
      schedule: 'Sundays 9:00 AM - 12:00 PM',
      students: 'Max 12 students',
      topics: ['O/L Syllabus Coverage', 'Exam Techniques', 'Past Papers', 'Advanced Problems', 'Revision Sessions'],
      price: 'Rs. 3,500/month'
    }
  ]

  const posts = [
    {
      title: 'Tips for Mastering Algebra',
      date: 'November 15, 2025',
      excerpt: 'Learn effective strategies to understand and solve algebraic equations with confidence...',
      category: 'Study Tips'
    },
    {
      title: 'Upcoming O/L Revision Workshop',
      date: 'November 10, 2025',
      excerpt: 'Join our intensive revision workshop for O/L mathematics. Limited seats available...',
      category: 'Announcements'
    },
    {
      title: 'Understanding Trigonometry Basics',
      date: 'November 5, 2025',
      excerpt: 'A comprehensive guide to understanding sine, cosine, and tangent functions...',
      category: 'Tutorials'
    },
    {
      title: 'Success Stories: Our 2025 O/L Results',
      date: 'October 28, 2025',
      excerpt: 'Celebrating the outstanding achievements of our students in the 2025 O/L examination...',
      category: 'Results'
    }
  ]

  const volunteering = {
    title: 'Free Mathematics Support Program',
    description: 'We believe every student deserves access to quality education. Our free mathematics support program helps underprivileged students excel in their studies.',
    opportunities: [
      'Free weekend classes for underprivileged students',
      'Study materials and practice books provided at no cost',
      'One-on-one mentoring for students who need extra support',
      'Online resources and video tutorials available free'
    ]
  }

  return (
    <div className="classes-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title fade-in-up">Our Classes & Programs</h1>
          <p className="page-subtitle fade-in">Comprehensive mathematics education tailored to your grade level</p>
        </div>
      </section>

      {/* Classes Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Available Classes</h2>
          <div className="classes-grid">
            {classes.map((classInfo, index) => (
              <div key={index} className="class-card card">
                <div className="class-header">
                  <h3 className="class-grade">{classInfo.grade}</h3>
                  <span className="class-level">{classInfo.level}</span>
                </div>
                <div className="class-info">
                  <div className="info-item">
                    <FaClock className="info-icon" />
                    <span>{classInfo.schedule}</span>
                  </div>
                  <div className="info-item">
                    <FaUsers className="info-icon" />
                    <span>{classInfo.students}</span>
                  </div>
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <span>Physical & Online</span>
                  </div>
                </div>
                <div className="class-topics">
                  <h4 className="topics-title">Topics Covered:</h4>
                  <ul className="topics-list">
                    {classInfo.topics.map((topic, idx) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="class-footer">
                  <span className="class-price">{classInfo.price}</span>
                  <button className="btn">Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="section posts-section">
        <div className="container">
          <h2 className="section-title">Latest Updates & Posts</h2>
          <div className="posts-grid">
            {posts.map((post, index) => (
              <div key={index} className="post-card card">
                <div className="post-category">{post.category}</div>
                <h3 className="post-title">{post.title}</h3>
                <div className="post-meta">
                  <FaCalendar className="post-icon" />
                  <span>{post.date}</span>
                </div>
                <p className="post-excerpt">{post.excerpt}</p>
                <a href="#" className="post-link">Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="section volunteering-section">
        <div className="container">
          <div className="volunteering-content">
            <div className="volunteering-header">
              <FaHeart className="volunteering-icon" />
              <h2 className="section-title">{volunteering.title}</h2>
            </div>
            <p className="volunteering-description">{volunteering.description}</p>
            <div className="opportunities-grid">
              {volunteering.opportunities.map((opportunity, index) => (
                <div key={index} className="opportunity-item">
                  <FaBook className="opportunity-icon" />
                  <p>{opportunity}</p>
                </div>
              ))}
            </div>
            <button className="btn">Learn More About Our Programs</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Classes
