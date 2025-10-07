
import { Helmet } from "react-helmet";
import React from "react";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
// import Companies from "../components/Companies";
import Testimonials from "../components/Testimonials";
import Blings from "../components/Blings";
import ProgressBar from "../components/ProgressBar";
import TopSlider from "../components/TopSlider";
import Patented from "../components/Patented";
import Technology from "../components/Technology";
import TeamPhotos from "../components/TeamPhotos";
import BoostNowVideo from "../components/BoostNowVideo"; 
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | BoostNow</title>
        <meta
          name="description"
          content="BoostNow provides cutting-edge IT solutions, including web development, ERP systems, cybersecurity, e-commerce, and automation. We support businesses, startups, and small enterprises with tailored software solutions and internship opportunities"
        />
        <meta
          name="keywords"
          content="IT services, software development, web development, ERP solutions, cybersecurity, e-commerce solutions, business automation, startups, small business support, enterprise solutions, cloud computing, SaaS, mobile app development, digital transformation, BoostNow, technology solutions, IT consulting, internships"
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* 🎥 BoostNow Video Section (moved below Hero) */}
      <BoostNowVideo />

      {/* Services Section */}
      <TopSlider />

      {/* Technologies Section */}
      <Technology />

      {/* Strategy / Work Process */}
      <Patented />

      {/* Background Animated Elements */}
      <Blings />

      {/* Progress and Features */}
      <ProgressBar />
      <Features />

      {/* Team Section */}
      <TeamPhotos />

      {/* Testimonials (optional) */}
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
