import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import Home from './Home';
import ScheduleCall from './ScheduleCall';
import Services from './Services';
import ExtServices from './ExtServices';
import About from './About';


function App() {
    return (
        <Router> {/* Only use Router here in the App component */}
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/schedule-call" element={<ScheduleCall />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ext-services" element={<ExtServices />} />
                <Route path="/About" element={<About />} />

                
            </Routes>
        </Router>
    );
}

export default App;
