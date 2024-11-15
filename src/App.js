import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './i18n.js';

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopUpButton from './components/TopUpButton.js';
import { useEffect, useRef, useState } from 'react';
import Project from './pages/Project.js';
import { projects } from './data/projectData.js';

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
            <Route path="/skills" element={<Skills />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
