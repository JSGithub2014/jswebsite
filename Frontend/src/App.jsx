import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Footer from './pages/Footer';
import WhyUs from './pages/WhyUs';
import Achievement from './pages/Achievement';
import Faqs from './pages/Faqs';
import Partners from './pages/Partners';
import Clientals from './pages/Clientals';
import RobustFoundation from './pages/RobustFoundation';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import ContactUs from './pages/ContactUs';
import OurTeam from './pages/OurTeam';
import OurStory from './pages/OurStory';
import NotFound from './components/NotFound';
import MotionWrapper from './components/MotionWrapper';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => t * (2 - t),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/login" element={<MotionWrapper><Login /></MotionWrapper>} />
        <Route path="/signup" element={<MotionWrapper><Register /></MotionWrapper>} />
        <Route path="/about-us/our-team" element={<MotionWrapper><OurTeam /></MotionWrapper>} />
        <Route path="/about-us/our-story" element={<MotionWrapper><OurStory /></MotionWrapper>} />
        <Route path="/" element={
          <MotionWrapper>
            <Landing />
            <AboutUs />
            <Services />
            <Partners />
            <Clientals />
            <Testimonial />
            <Achievement />
            <WhyUs />
            <Faqs />
            <RobustFoundation />
            <ContactUs />
            <Footer />
          </MotionWrapper>
        } />
        <Route path="*" element={<MotionWrapper><NotFound /></MotionWrapper>} />
      </Routes>
      <ScrollToTop />
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
