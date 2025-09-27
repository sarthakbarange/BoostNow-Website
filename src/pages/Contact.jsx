import React, { useEffect } from 'react';
import Form from '../components/Form';
import Support from '../components/Support';
import Info from '../components/Info';
import { Helmet } from "react-helmet";
const Contact = () => {
  useEffect(() => {
    // Check if there is a hash in the URL and scroll to the element with that ID
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <><Helmet>
    <title>Contact | BoostNow</title>
    <meta name="description" content="Get in touch with BoostNow for expert IT solutions, including web development, cybersecurity, ERP, and business automation. Contact us today to discuss your project or partnership opportunities." />
    <meta name="keywords" content="Contact BoostNow, IT services contact, software development inquiries, business consultation, cybersecurity solutions, ERP solutions, web development support, IT partnerships, technology consulting" />
  </Helmet>
    <div className='relative z-10'>
      <Form />
      <Support id="support" /> {/* Ensure correct id for the target section */}
      <Info id="info" />
    </div>
    </>
  );
};

export default Contact;
