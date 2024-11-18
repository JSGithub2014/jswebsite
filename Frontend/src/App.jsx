import Lenis from 'lenis';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import MotionWrapper from './components/MotionWrapper';
import NotFound from './components/NotFound';

// Lazy load pages
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Landing = lazy(() => import('./pages/Landing'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Services = lazy(() => import('./pages/Services'));
const Testimonial = lazy(() => import('./pages/Testimonial'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const Achievement = lazy(() => import('./pages/Achievement'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Partners = lazy(() => import('./pages/Partners'));
const Clientals = lazy(() => import('./pages/Clientals'));
const RobustFoundation = lazy(() => import('./pages/RobustFoundation'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const OurTeam = lazy(() => import('./pages/OurTeam'));
const OurStory = lazy(() => import('./pages/OurStory'));
const Finance = lazy(() => import('./pages/Finance'));
const Insurance = lazy(() => import('./pages/Insurance'));
const RealEstate = lazy(() => import('./pages/RealEstate'));
const MemberDetail = lazy(() => import('./components/AboutUs/MemberDetail'));

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => setHasError(true);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      {React.Children.map(children, child =>
        React.cloneElement(child, { onError: handleError })
      )}
    </React.Fragment>
  );
};

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
    window.scrollTo(0, 0); // Always scroll to top on page change
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  }

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isMemberDetailPage = location.pathname.startsWith('/member/');

  return (
    <div className='overflow-x-hidden'>
      <Helmet>
        <title>J&S Group | Real Estate Finance and Insurance Experts</title>
        <meta name="description" content="Expert solutions in real estate finance and insurance." />
        <meta name="keywords" content="Real Estate Finance, Insurance, J&S Group" />
      </Helmet>

      {/* Conditionally render Navbar */}
      {!isAuthPage && !isMemberDetailPage && <Navbar />}
      
      <ScrollToTop />
      
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/login" element={<MotionWrapper><Login /></MotionWrapper>} />
            <Route path="/signup" element={<MotionWrapper><Register /></MotionWrapper>} />
            <Route path="/about-us/our-team" element={<MotionWrapper><OurTeam /></MotionWrapper>} />
            <Route path="/about-us/our-story" element={<MotionWrapper><OurStory /></MotionWrapper>} />
            <Route path="/services/finance" element={<MotionWrapper><Finance /></MotionWrapper>} />
            <Route path="/services/insurance" element={<MotionWrapper><Insurance /></MotionWrapper>} />
            <Route path="/services/real-estate" element={<MotionWrapper><RealEstate /></MotionWrapper>} />
            <Route path="/member/:name" element={<MotionWrapper><MemberDetail /></MotionWrapper>} />
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
              </MotionWrapper>
            } />
            <Route path="*" element={<MotionWrapper><NotFound /></MotionWrapper>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      
      {!isAuthPage && !isMemberDetailPage && <Footer />}
    </div>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
