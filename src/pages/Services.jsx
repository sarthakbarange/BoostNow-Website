import React, { useEffect } from 'react'
import Hero from '../components/vinit/Hero/ServicesHero'
// import BrandsLogo from '../components/vinit/BrandsLogo/BrandsLogo'
// import ServiceNew from '../components/vinit/Services/Services'
// import BlogsComp from '../components/vinit/Blogs/BlogsComp'
// import TestimonialNew from '../components/vinit/Testimonial/Testimonial'
import AOS from "aos";
import "aos/dist/aos.css";
// import ITTraining from './ITTraining'
// import ITTraning from '../components/ITTraning'
import MainServices from '../components/mainServices'
// import Testimonial from '../components/vinit/Testimonial/Testimonial/Testimonial1'
import GetStartedNow from '../components/GetStartedNow'
import { Helmet } from "react-helmet";
const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <><Helmet>
    <title>Services | BoostNow</title>
    <meta name="description" content="BoostNow offers top-tier IT services, including web development, ERP solutions, cybersecurity, and automation. We provide tailored technology solutions for startups, small businesses, and enterprises to help them scale efficiently." />
    <meta name="keywords" content="IT services, software development, web development, ERP solutions, cybersecurity, business automation, cloud computing, SaaS, IT consulting, startups, small business technology, enterprise solutions, digital transformation, e-commerce solutions, managed IT services " />
  </Helmet>
    <div className='bg-transparent relative z-10 mx-2 '>
      <Hero />
      {/* OUR SERVICES */}
      <MainServices/>
      {/* <ITTraning/> */}
      {/* <BrandsLogo /> */}
      {/* ServiceNew is a comonent Discover Our Digital Marketing Expertise */}
      {/* <ServiceNew /> */}
      {/* ServiceNew is a comonent Internship Opportunities and Courses ; */}
      {/* <ITTraining /> */}
      {/* <TestimonialNew /> */}
      {/* <BlogsComp /> */}
      {/* <Testimonial/> */}
      <GetStartedNow/>
    </div></>
  )
}

export default Services
