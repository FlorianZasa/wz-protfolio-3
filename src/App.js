import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './i18n.js';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
//import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopUpButton from './components/TopUpButton.js';
import { useEffect, useRef, useState } from 'react';
import Project from './pages/Project.js';

function App() {
  const [showTopUp, setShowTopUp] = useState('top-up-button-hidden');
  const refScrollUp = useRef();

  const handleVisibleTopUp = () => {
    if (window.scrollY > 100) {
      setShowTopUp('top-up-button');
    } else {
      setShowTopUp('top-up-button-hidden');
    }
  };

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleTopUp);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleVisibleTopUp);
  }, []); // Empty dependency array ensures this only runs once

  return (
    <Router basename="/wz-protfolio-3">
      <div className='container' ref={refScrollUp}>
        <Navbar />
        <TopUpButton showTopUp={showTopUp} scrollUp={handleScrollUp} />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/noPage" element={<NoPage />} />
            <Route path="*" element={<Navigate to={process.env.REACT_APP_PUBLIC_URL || "/"} replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
