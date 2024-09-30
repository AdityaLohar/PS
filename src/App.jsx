import './App.css'
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import '@fontsource/montserrat';
import '@fontsource/hind-madurai';
import PmFellowship from './pages/PmFellowship';
import FaqPage from './pages/FaqPage';
import { useEffect } from 'react';
import BlogPage from './pages/BlogPage';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import CaseStudy from './pages/CaseStudy';
import ReferralPage from './pages/ReferralPage';
import PmFellowshipReferral from './pages/PmFellowshipReferral';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-5MF7F8L6PB', {
      page_path: location.pathname,
    });
  }, [location]);

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Navbar />
      {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<BlogPage />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/pm-fellowship' element={<PmFellowship />} />
          <Route path='/pm-fellowship/referral/:id' element={<PmFellowshipReferral />} />
        </Routes>
      {/* </Router> */}
      <div className={`w-full bg-black ${isHomePage ? 'lg:pb-16' : ''}`}>
        <Footer />
      </div>
    </div>
    // strata scratch
  )
}

export default App
