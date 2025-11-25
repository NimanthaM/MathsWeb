import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaGraduationCap, FaBook, FaTrophy, FaUsers, FaChalkboardTeacher, FaClock, FaTimes, FaChevronLeft, FaChevronRight, FaCalendar, FaMapMarkerAlt, FaWhatsapp, FaHome, FaLaptop } from 'react-icons/fa'
import './Home.css'

function Home() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const openModal = (project) => {
        setSelectedProject(project)
        setCurrentImageIndex(0)
    }

    const closeModal = () => {
        setSelectedProject(null)
        setCurrentImageIndex(0)
    }

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            )
        }
    }

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            )
        }
    }

    // Auto-advance slideshow every 4 seconds
    useEffect(() => {
        if (selectedProject && selectedProject.images.length > 1) {
            const interval = setInterval(() => {
                nextImage()
            }, 4000)

            return () => clearInterval(interval)
        }
    }, [selectedProject, currentImageIndex])
    const features = [
        {
            icon: <FaGraduationCap />,
            title: 'Expert Guidance',
            description: 'Learn from a experienced teacher with proven track records in mathematics education.'
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
        { grade: '6,7,8,9 වසර සිංහල මාධ්‍ය' },
        { grade: 'Grade 6,7,8,9 English Medium' },
        { grade: '10,11(O/L) සිංහල මාධ්‍ය' }
    ]

    const classTypes = [
        {
            icon: <FaUsers />,
            title: <>Individual / Group Classes<br />(තනි / කණ්ඩායම් පංති)</>,
            description: 'Personalized one-on-one sessions or small group classes tailored to your learning pace and style.'
        },
        {
            icon: <FaHome />,
            title: <>Home Visit<br />(නිවසට පැමිණ ඉගැන්වීම)</>,
            description: 'Convenient home tuition services available near Colombo and Gampaha districts for comfortable learning.'
        },
        {
            icon: <FaLaptop />,
            title: <>Online Classes<br />(මාර්ගගත ක්‍රමයට)</>,
            description: 'Interactive online sessions accessible from anywhere in Sri Lanka with live teaching and support.'
        }
    ]

    const projects = [
        {
            title: 'O/L Mathematics Paper Discussion Seminar',
            description: 'Conducted a comprehensive mathematics workshop for O/L students focusing on problem-solving techniques and exam preparation strategies.',
            image: '/images/seminar1.jpeg',
            type: 'Seminar - Volunteering',
            date: 'November, 2025',
            place: 'Magammana Maha Vidyalaya, Homagama',
            fullDescription: 'Collaborating with the Exploration Club of University of Colombo School of Computing, conducted a full-day comprehensive mathematics workshop designed specifically for O/L students in Grade 10 & 11 of Magammana Maha Vidyalaya, Homagama for preparing for their final examinations & term tests. The workshop covered advanced problem-solving techniques, time management strategies, and exam preparation tips with past papers discussion. Over 45 students participated and benefited from interactive sessions, practice problems, and one-on-one guidance from experienced mathematics educators.',
            images: [
                '/images/seminar1.jpeg',
                '/images/seminar1-2.jpeg',
                '/images/seminar1-3.jpeg',
                '/images/seminar1-4.jpeg',
                '/images/seminar1-5.jpeg'
            ]
        },
        {
            title: 'O/L Mathematics Seminar',
            description: 'Free mathematics seminar series for students in grade 10 & 11 at Deepangoda Sri Medananda College , helping them build strong foundations in mathematics.',
            image: '/images/seminar2-3.jpeg',
            type: 'Seminar - Volunteering',
            date: 'February, 2025',
            place: 'Deepangoda Sri Medananda College',
            fullDescription: 'With the collaboration of The exploration Club of University of Colombo School of Computing, successfully conducted a free mathematics seminar and paper discussion for the students of grade 10 & 11 at Deepangoda Sri Medananda College. The program focused on building strong mathematical foundations, boosting confidence, and making mathematics accessible to all.',
            images: [
                '/images/seminar2.jpeg',
                '/images/seminar2-2.jpeg',
                '/images/seminar2-3.jpeg',
                '/images/seminar2-4.jpeg',
                '/images/seminar2-5.jpeg'
            ]
        },

    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background"></div>
                <div className="container">
                    <div className="hero-content fade-in-up">
                        <h1 className="hero-title">
                            Mathematics with
                            <span className="hero-highlight"> Expert Guidance</span>
                            <span className=""> Grade 6 to 11</span>
                        </h1>
                        <p className="hero-sinhala">

                            එන්න,බය නැතුව ගණන් හදන්න.<br />
                            ලේසිම විෂය ලේසියෙන්ම ගොඩ දාගන්න!


                        </p>
                        <p className="hero-description ">
                            Professional mathematics tutoring for grades 6-11 (O/L).<br />
                            Build strong foundations, develop problem-solving skills, and achieve excellence.
                        </p>
                        <div className="hero-buttons">
                            <a href="https://wa.me/94771415855?text=Hello!%20I%20would%20like%20to%20register%20for%20mathematics%20classes." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" onClick={(e) => {
                                e.preventDefault();
                                const message = encodeURIComponent("Hello! I would like to register for mathematics classes.");
                                const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                                const whatsappUrl = isMobile
                                    ? `whatsapp://send?phone=94771415855&text=${message}`
                                    : `https://wa.me/94771415855?text=${message}`;
                                window.open(whatsappUrl, '_blank');
                            }}><FaWhatsapp /> Register Now</a>
                            <a href="#classes" className="btn btn-outline" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                            }}>Explore Classes</a>
                            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Section */}
            <section className="section posts-preview-section">
                <div className="container">
                    <div className="single-post-container">
                        <div className="single-post-image">
                            <img src="/images/mathspost1.jpg" alt="Mathematics Class Information" />
                        </div>
                        <div className="single-post-content">
                            <p>
                                වාර විභාගයට සූදානම් නැද්ද? ගණං paper එකට බයයිද?<br />
                                O/L ගොඩ දාගන්න බැරි වෙයි කියල හිතනවද❓
                            </p>
                            <p>
                                ගොඩදාගන්න විතරක් නෙවෙයි, හොදම ප්‍රතිඵලයකට යන පාර දැන ගන්න,<br />
                                එන්න, දැන් ඉදන් අලුතෙන් පටන් ගමු!
                            </p>
                            <p>
                                ලේසිම විෂය ලේසියෙන්ම ගොඩදාගන්න❗<br />
                                ● විෂය කරුණු හොදින් මතක තබා ගැනීමේ  කෙටි ක්‍රම<br />
                                ● වාර විභාග ඉලක්ක කර ගත් විශේෂ ප්‍රශ්න පත්‍ර පුහුණුව<br />
                                ● සිද්ධාන්ත සහ පුනරීක්ෂණ එකම පංතියෙන්
                            </p>
                            <p>
                                බය නැතුව ගණන් හදන්න කැමති ළමයි එන්න!
                            </p>
                            <p>
                                බදවා ගැනීම් දැන් සිදු කෙරේ.<br />
                                ● නිවසට පැමිණ(කොළඹ,ගම්පහ දිස්ත්‍රික්ක අවට) හෝ  Online මගින් ලංකාවටම<br />
                                ● තනි හෝ කණ්ඩායම් පංති<br />
                                අදම කතා කරන්න - 077 1415855
                            </p>
                            <p className="post-author">
                                -නිමන්ත මධුෂාන්-
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <h2 className="section-title">Why Choose A+ Maths?</h2>
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
            <section id="classes" className="section grades-section">
                <div className="container">
                    <h2 className="section-title">Classes We Offer</h2>
                    <div className="grades-grid">
                        {grades.map((item, index) => (
                            <div key={index} className="grade-card card">
                                <div className="grade-number">{index + 1}</div>
                                <h3 className="grade-title">{item.grade}</h3>
                            </div>
                        ))}
                    </div>

                    <h3 className="class-types-subtitle">Available Learning Options</h3>
                    <div className="class-types-grid">
                        {classTypes.map((classType, index) => (
                            <div key={index} className="class-type-card card">
                                <div className="class-type-icon">{classType.icon}</div>
                                <h4 className="class-type-title">{classType.title}</h4>
                                <p className="class-type-description">{classType.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="section projects-section">
                <div className="container">
                    <h2 className="section-title">Our Projects & Community Work</h2>
                    <p className="section-subtitle">Seminars, workshops, and volunteering initiatives to spread mathematical knowledge</p>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="project-card card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <span className="project-badge">{project.type}</span>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <button className="btn-read-more" onClick={() => openModal(project)}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div className="project-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>

                        <div className="modal-body">
                            <div className="modal-slideshow">
                                <img
                                    src={selectedProject.images[currentImageIndex]}
                                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                                />
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button className="slideshow-btn prev-btn" onClick={prevImage}>
                                            <FaChevronLeft />
                                        </button>
                                        <button className="slideshow-btn next-btn" onClick={nextImage}>
                                            <FaChevronRight />
                                        </button>
                                        <div className="slideshow-indicators">
                                            {selectedProject.images.map((_, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                                                    onClick={() => setCurrentImageIndex(idx)}
                                                ></span>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="modal-details">
                                <span className="modal-badge">{selectedProject.type}</span>
                                <h2 className="modal-title">{selectedProject.title}</h2>

                                <div className="modal-meta">
                                    <div className="meta-item">
                                        <FaCalendar />
                                        <span>{selectedProject.date}</span>
                                    </div>
                                    <div className="meta-item">
                                        <FaMapMarkerAlt />
                                        <span>{selectedProject.place}</span>
                                    </div>
                                </div>

                                <p className="modal-description">{selectedProject.fullDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
