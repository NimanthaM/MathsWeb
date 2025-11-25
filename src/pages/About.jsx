import { FaGraduationCap, FaAward, FaChalkboardTeacher } from 'react-icons/fa'
import './About.css'

function About() {
    const qualifications = [
        {
            icon: <FaGraduationCap />,
            title: 'Education',
            items: [
                'Undergraduate - BSc in Computer Science',
                'University of Colombo School of Computing'
            ]
        },
        {
            icon: <FaChalkboardTeacher />,
            title: 'Teaching Experience',
            items: [
                'Mathematics tutor for grades 6-11 (O/L)',
                'Conducted multiple educational seminars',
                'Individual and group class expertise'
            ]
        }
    ]

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content">
                        <h1 className="page-title">About Teacher - ගුරුවරයා ගැන</h1>
                        <p className="page-subtitle">Dedicated to Making Mathematics Easy and Enjoyable</p>
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="section profile-section">
                <div className="container">
                    <div className="profile-container">
                        <div className="profile-image-wrapper">
                            <div className="profile-image">
                                <img src="/images/mathsbg2.jpg" alt="Nimantha Madhushan" />
                            </div>
                        </div>
                        <div className="profile-content">
                            <h2 className="profile-name">Nimantha Madushan</h2>
                            <p className="profile-title">"ගණිතය අපහසු නැත, එය අපහසු කරන්නේ අප විසින් එය ඉගෙන ගන්නා ආකාරයයි"</p>
                            <div className="profile-description">
                                <ul className="about-points">
                                    <li>
                                        <strong>A proud Anandian and got selected for the No.1 university in Sri Lanka after doing A/L examination in physical science stream</strong>
                                        <br />
                                        <span className="sinhala-text">කොළඹ ආනන්ද විද්‍යාලයේ ආදි ශිෂ්‍යයෙකු මෙන්ම උසස් පෙළ ගණිත අංශයෙන් හදාරා ලංකාවේ අංක 1 විශ්ව විද්‍යාලයට තේරී පත්වීම</span>
                                    </li>
                                    <li>
                                        <strong>A final year Computer Science Undergraduate at University of Colombo School of Computing</strong>
                                        <br />
                                        <span className="sinhala-text">කොළඹ විශ්වවිද්‍යාලයීය පරිගණක අධ්‍යනායතනයේ අවසන් වසර සිසුවෙකු ලෙස පරිගණක විද්‍යා උපාධිය හැදෑරීම</span>
                                    </li>
                                    <li>
                                        <strong>Teaching how to remember subject matter well through simple methods</strong>
                                        <br />
                                        <span className="sinhala-text">සරල ක්‍රම මගින් විෂය කරුණු හොදින් මතක තබා ගන්නා ආකාරය ඉගැන්වීම</span>
                                    </li>
                                    <li>
                                        <strong>Paying special attention to writing question papers</strong>
                                        <br />
                                        <span className="sinhala-text">ප්‍රශ්න පත්‍ර ලිවීම සම්බන්ධයෙන් විශේෂ අවධානයක් යොමු කිරීම</span>
                                    </li>
                                    <li>
                                        <strong>Teaching to face exams without fear through discussion of special exam-oriented question papers</strong>
                                        <br />
                                        <span className="sinhala-text">විභාග ඉලක්ක කරගත් විශේෂ ප්‍රශ්නපත්‍ර සාකච්ඡාව මගින් බය නැතුව විභාගයට මුහුණදීමට ඉගැන්වීම</span>
                                    </li>
                                    <li>
                                        <strong>Years of teaching experience</strong>
                                        <br />
                                        <span className="sinhala-text">වසර ගණනාවක ඉගැන්වීමේ පළපුරුද්ද</span>
                                    </li>
                                    <li>
                                        <strong>As a volunteer, I have conducted special mathematics seminar series free of charge for students from a number of underprivileged schools.</strong>
                                        <br />
                                        <span className="sinhala-text">සමාජ සේවා ක්‍රියාකරුවෙකු ලෙස අඩු පහසුකම් සහිත පාසල් ගණනාවක සිසුන්ට නොමිලයේ විශේෂ ගණිත සම්මන්ත්‍රණ මාලා පවත්වා තිබීම</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualifications Section */}
            <section className="section qualifications-section">
                <div className="container">
                    <h2 className="section-title">Qualifications & Experience</h2>
                    <div className="qualifications-grid">
                        {qualifications.map((qual, index) => (
                            <div key={index} className="qualification-card card">
                                <div className="qualification-icon">{qual.icon}</div>
                                <h3 className="qualification-title">{qual.title}</h3>
                                <ul className="qualification-list">
                                    {qual.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Mathematical Journey?</h2>
                        <p className="cta-description">
                            Join my classes and experience personalized, effective mathematics education.
                        </p>
                        <a
                            href="https://wa.me/94771415855?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20classes."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
