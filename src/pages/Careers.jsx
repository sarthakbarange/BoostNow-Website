import React from 'react'
import Career from '../components/Careers'
import { Helmet } from "react-helmet";
const Careers = () => {
  return (<>
  <Helmet>
        <title>Careers | BoostNow</title>
        <meta name="description" content="Join BoostNow and be part of an innovative team shaping the future of IT solutions. Explore career opportunities in web development, cybersecurity, ERP, and software engineering. Apply now!" />
        <meta name="keywords" content="BoostNow careers, IT jobs, software development jobs, web development careers, cybersecurity jobs, ERP jobs, technology careers, job openings, internship opportunities, IT job vacancies

" />
      </Helmet>
    <div>

       <Career />
    </div>
    </>
  )
}

export default Careers
