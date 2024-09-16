import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Error from './pages/Error'
import Footer from './components/Footer'
import About from './pages/About'
import Accomodation from './pages/Accomodation'

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/Accomodation/:idNumber"
                    element={<Accomodation />}
                />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
)
