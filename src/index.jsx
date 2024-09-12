import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import Survey from './pages/Survey'
// import Results from './pages/Results'
import Header from './components/Header'
import Error from './pages/Error'
// import Freelances from './pages/Freelances'
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
                {/* <Route path="/survey/:questionNumber" element={<Survey />} /> */}
                {/* <Route path="/survey/results" element={<Results />}/> */}
                {/* <Route path="/freelances" element={<Freelances />}/> */}
                <Route path="/about" element={<About />} />
                {/* <Route path="/survey" element={<Survey />}>
                    <Route path="client" element={<ClientForm />} />
                    <Route path="freelance" element={<FreelanceForm />}
                    />
                </Route> */}
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
)
