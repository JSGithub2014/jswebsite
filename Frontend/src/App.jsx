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
import Finance from './pages/Finance';
import Insurance from './pages/Insurance';
import RealEstate from './pages/RealEstate';
import ManagementTeam from './components/AboutUs/ManagementTeam';
import j_m_Img from './assets/ourTeam/j.mittal.jpeg';
import s_p_Img from './assets/ourTeam/s.p.jpeg';
import s_chaurasiya from './assets/ourTeam/s.chaurasia.jpeg';
import MemberDetail from './components/AboutUs/MemberDetail';

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

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isMemberDetailPage = location.pathname.startsWith('/member/');

  const teamMembers = [
    {
      name: 'Jayant Mittal',
      role: 'Founder',
      image: j_m_Img,
      description: 'Jayant Mittal is a visionary leader with a passion for innovation and technology...',
      social: {
        linkedin: 'https://www.linkedin.com/in/jayant-mittal-3297b3147/',
      },
    },
    {
      name: 'Sanil Pandit',
      role: 'Director',
      image: s_p_Img,
      description: 'Sanil Pandit is an accomplished Director with a robust background in strategic planning...',
      social: {
        linkedin: 'https://www.linkedin.com/in/sanil-pandit-474a52161/',
      },
    },
    {
      name: 'Sayali KC',
      role: 'Chief Marketing Officer',
      image: s_chaurasiya,
      description: 'Sayali KC is a dynamic Chief Marketing Officer with a keen eye for branding...',
      social: {
        linkedin: 'https://www.linkedin.com/in/sayali-chaurasiya-0a31a4162/',
      },
    },
  ];

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/login" element={<MotionWrapper><Login /></MotionWrapper>} />
        <Route path="/signup" element={<MotionWrapper><Register /></MotionWrapper>} />
        <Route path="/about-us/our-team" element={<MotionWrapper><OurTeam /></MotionWrapper>} />
        <Route path="/about-us/our-story" element={<MotionWrapper><OurStory /></MotionWrapper>} />
        <Route path="/services/finance" element={<MotionWrapper><Finance /></MotionWrapper>} />
        <Route path="/services/insurance" element={<MotionWrapper><Insurance /></MotionWrapper>} />
        <Route path="/services/real-estate" element={<MotionWrapper><RealEstate /></MotionWrapper>} />
        <Route path="/member/:id" element={<MemberDetail />} />
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
            <ManagementTeam teamMembers={teamMembers} />
          </MotionWrapper>
        } />
        <Route path="*" element={<MotionWrapper><NotFound /></MotionWrapper>} />
      </Routes>
      {/* Conditionally render the Footer based on the current path */}
      {!isAuthPage && !isMemberDetailPage && <Footer />}
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
