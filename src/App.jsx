import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            // If there's a hash, scroll to that element
            setTimeout(() => {
                const id = hash.substring(1)
                let element = document.getElementById(id)
                // Fallback to querySelector if id not found
                if (!element) {
                    element = document.querySelector(`.${id}-section`)
                }
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        } else {
            // Otherwise scroll to top
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])

    return null
}

function App() {
    return (
        <Router>
            <div className="app">
                <ScrollToTop />
                <Navbar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
