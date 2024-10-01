import Lenis from 'lenis';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import OurStrength from './components/OurStrength';


const App = () => {
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <Loading />; // Show loading screen while loading
  }

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={
          <>
            <section id="Home"><Landing /></section>
            <section id="About"><AboutUs /></section>
            <section id="Services"><Services /></section>
            <Partners />
            <Clientals />
            <Testimonial />
            <section id="Achievement"><Achievement /></section>
            <section id="Whyus"><WhyUs /></section>
            <section id="FAQs"><Faqs /></section>
            <OurStrength/>

            <RobustFoundation />
            <ContactUs />
            <Footer />
            <ScrollToTop />
          </>
        } />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
