
import { Helmet } from "react-helmet";
import React, { useEffect } from "react";
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
const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>Home | BoostNow</title>
        <meta name="description" content="BoostNow provides cutting-edge IT solutions, including web development, ERP systems, cybersecurity, e-commerce, and automation. We support businesses, startups, and small enterprises with tailored software solutions and internship opportunities" />
        <meta name="keywords" content="IT services, software development, web development, ERP solutions, cybersecurity, e-commerce solutions, business automation, startups, small business support, enterprise solutions, cloud computing, SaaS, mobile app development, digital transformation, BoostNow, technology solutions, IT consulting, internships

" />
      </Helmet>
      <HeroSection /> 
      <TopSlider /> 
      <Technology/>
      <Patented/>
      <Blings />
      
      {/* <Companies /> */}
      <ProgressBar />
      
      {/* <Features /> */}
      <Features />
      <TeamPhotos/>
      {/* <Testimonials /> */}
      </div>
  );
};

export default Home;
