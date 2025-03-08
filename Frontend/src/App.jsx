import Lenis from 'lenis';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import MotionWrapper from './components/MotionWrapper';
import NotFound from './components/NotFound';

// Lazy loading pages for better performance
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
const AdminPage = lazy(() => import('./components/AdminPage'));
const BuyingDetails = lazy(() => import('./components/JSservices/RealEstate/PropertyBuying/AllBuyingOptions'));
const PropertyDetails = lazy(() => import('./components/JSservices/RealEstate/PropertyBuying/PropertyDetails')); // ✅ Import PropertyDetails
const AddProperty = lazy(() => import('./components/JSservices/RealEstate/PropertyBuying/AddProperty'));
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </button>
    </div>
  ) : (
    <React.Suspense fallback={<Loading />}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onError: () => setHasError(true) })
      )}
    </React.Suspense>
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
    }, 2000);

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

  const isAuthPage = ["/login", "/signup"].includes(location.pathname);
  const isMemberDetailPage = location.pathname.startsWith('/member/');

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>J&S Group | Real Estate, Finance & Insurance Experts</title>
        <meta name="description" content="Expert solutions in real estate, finance, and insurance. Connect with J&S Group today!" />
        <meta name="keywords" content="Real Estate, Finance, Insurance, J&S Group" />
      </Helmet>

      {!isAuthPage && !isMemberDetailPage && <Navbar />}

      <ScrollToTop />

      <ErrorBoundary>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<MotionWrapper><Login /></MotionWrapper>} />
          <Route path="/signup" element={<MotionWrapper><Register /></MotionWrapper>} />

          {/* About Us */}
          <Route path="/about-us/our-team" element={<MotionWrapper><OurTeam /></MotionWrapper>} />
          <Route path="/about-us/our-story" element={<MotionWrapper><OurStory /></MotionWrapper>} />

          {/* Services */}
          <Route path="/services/finance" element={<MotionWrapper><Finance /></MotionWrapper>} />
          <Route path="/services/insurance" element={<MotionWrapper><Insurance /></MotionWrapper>} />
          <Route path="/services/real-estate" element={<MotionWrapper><RealEstate /></MotionWrapper>} />

          {/* Member Details */}
          <Route path="/member/:name" element={<MotionWrapper><MemberDetail /></MotionWrapper>} />

          {/* Admin Page */}
          <Route path="/api/admin" element={<MotionWrapper><AdminPage /></MotionWrapper>} />

          {/* Buying Details */}
          <Route path="/buying-details" element={<MotionWrapper><BuyingDetails /></MotionWrapper>} />

          {/* Property Details Page ✅ */}
          <Route path="/property/:id" element={<MotionWrapper><PropertyDetails /></MotionWrapper>} />

          <Route path="/add-property" element={<MotionWrapper><AddProperty /></MotionWrapper>} />

          {/* Landing Page & Other Sections */}
          <Route
            path="/"
            element={
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
            }
          />

          {/* 404 Not Found */}
          <Route path="*" element={<MotionWrapper><NotFound /></MotionWrapper>} />
        </Routes>
      </ErrorBoundary>

      {!isAuthPage && !isMemberDetailPage && <Footer />}
    </div>
  );
};

// Wrapping the app inside Router
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
