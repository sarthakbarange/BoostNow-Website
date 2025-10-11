import React from 'react'
import FAQForm from '../components/FAQForm'
import FAQQuestion from '../components/FAQQuestion'
import FAQNo from '../components/FAQNo'
import { Helmet } from "react-helmet";

const FAQ = () => {
  return (
    <><Helmet>
        <title>FAQ | BoostNow</title>
        <meta name="description" content="Get in touch with BoostNow for expert IT solutions, including web development, cybersecurity, ERP, and business automation. Contact us today to discuss your project or partnership opportunities." />
        <meta name="keywords" content="Contact BoostNow, IT services contact, software development inquiries, business consultation, cybersecurity solutions, ERP solutions, web development support, IT partnerships, technology consulting" />
      </Helmet>
    <div className='pt-20 relative z-10'>
        <FAQNo />
        <FAQQuestion />
        <FAQForm />
    </div></>
  )
}

export default FAQ
