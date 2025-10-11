
"use client"
import { useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Careers from "./pages/Careers"
import FAQ from "./pages/FAQ"
// import ITTraining from "./pages/ITTraining";
import Traning from "./pages/Training"
// import * as THREE from "three"
// import WAVES from "vanta/dist/vanta.waves.min"
import Solution from "./pages/ITServices"
import Startups from "./pages/ITServices/Startups"
import SmallBusiness from "./pages/ITServices/SmallBusinesses"
import ITRecruitmentServices from "./pages/ITRecruitmentServices"
import ProjectT from "./components/Testimonial/ProjectT/ProjectT"
import Particles from "./components/Particles"


const App = () => {

  // Dynamically compute safe top offset based on actual navbar height + its top offset
  useEffect(() => {
    const updateNavbarSafeTop = () => {
      const header = document.getElementById('site-navbar')
      if (!header) return
      const rect = header.getBoundingClientRect()
      // rect.top is usually 16px due to top-4, add height and a small margin
      const safe = Math.ceil(rect.top + rect.height + 8) // +8px breathing room
      document.documentElement.style.setProperty('--navbar-safe-top', `${safe}px`)
    }
    updateNavbarSafeTop()
    window.addEventListener('resize', updateNavbarSafeTop)
    // Some fonts/images may shift layout after load
    window.addEventListener('load', updateNavbarSafeTop)
    return () => {
      window.removeEventListener('resize', updateNavbarSafeTop)
      window.removeEventListener('load', updateNavbarSafeTop)
    }
  }, [])

  // Cursor animation
  useEffect(() => {
    const cursor = document.getElementById("cursor")
    const trails = document.querySelectorAll(".cursor-trail")

    const move = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }

      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${e.clientX}px`
          trail.style.top = `${e.clientY}px`
        }, index * 50)
      })
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      <Router>
        {/* Cursor animation divs */}
        <div id="cursor" className="cursor"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="cursor-trail"></div>
        ))}

        <Navbar />
        <div className="main-content bg-black relative" style={{ minHeight: "100vh" }}>
          {/* Global particle background for entire website */}
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              particleHoverFactor={3}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/project" element={<ProjectT />} />
              <Route path="/faq" element={<FAQ />} />
              {/* <Route path="/it" element={<ITTraining />} /> */}
              <Route path="/services/itservices" element={<Solution />} />
              <Route path="/services/training" element={<Traning />} />            <Route path="/services/itservices/startups" element={<Startups />} />
              {/* <Route path="/services/startups" element={<Startups />} /> */}
              <Route path="/services/itservices/smallbusiness" element={<SmallBusiness />} />
              <Route path="/itrecruitment" element={<ITRecruitmentServices />} />
              <Route path="/itservices" element={<Solution />} />
              <Route path="/training" element={<Traning />} />
              {/* Catch-all route for 404 errors - redirect to home */}
              <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  )
}

export default App


// import React, { useEffect, useRef, useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Careers from "./pages/Careers";
// import FAQ from "./pages/FAQ";
// // import ITTraining from "./pages/ITTraining";
// import Traning from "./pages/Training";
// import * as THREE from "three";
// import WAVES from "vanta/dist/vanta.waves.min";
// import Solution from "./pages/ITServices";
// import Startups from "./pages/ITServices/Startups";
// import SmallBusiness from "./pages/ITServices/SmallBusinesses";

// const App = () => {
//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     const applyVantaEffect = () => {
//       if (vantaEffect) vantaEffect.destroy(); 

//       setVantaEffect(
//         WAVES({
//           el: vantaRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           waveSpeed:0.70,
//           color: window.innerWidth < 768 ? 0x002B7F : 0x000,
//           shininess: 50.0,
//           zoom: window.innerWidth < 768 ? 0.7 : 0.8, 
//           THREE,
//         })
//       );
//     };

//     applyVantaEffect(); 
//     window.addEventListener("resize", applyVantaEffect); 

//     return () => {
//       if (vantaEffect) vantaEffect.destroy(); 
//       window.removeEventListener("resize", applyVantaEffect);
//     };
//   }, [vantaEffect]);

//   return (
//     <>
//       <Router>
//         <Navbar />
//         {/* <div className="bg-black"> */}
//         <div ref={vantaRef} style={{ minHeight: "100vh", overflow: "hidden" }}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/faq" element={<FAQ />} />
//             {/* <Route path="/it" element={<ITTraining />} /> */}
//             <Route path="/services/itservices" element={<Solution />} />
//             <Route path="/services/training" element={<Traning />} />
//             <Route path="/services/startups" element={<Startups />} />
//             <Route path="/services/smallbusiness" element={<SmallBusiness />} />
//           </Routes>
//           <Footer />
//         </div>
//       </Router>
//     </>
//   );
// };

// export default App;
// // import React, { useEffect, useRef } from "react";
// // import "./App.css";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Services from "./pages/Services";
// // import Contact from "./pages/Contact";
// // import Careers from "./pages/Careers";
// // import FAQ from "./pages/FAQ";
// // import ITTraining from "./pages/ITTraining";
// // import Traning from "./pages/Training";
// // import * as THREE from "three";
// // import WAVES from "vanta/dist/vanta.waves.min";
// // import Solution from "./pages/ITServices";
// // import Startups from "./pages/ITServices/Startups";
// // import SmallBusiness from "./pages/ITServices/SmallBusinesses";

// // const App = () => {
// //   const vantaRef = useRef(null);

// //   useEffect(() => {
// //     const vantaEffect = WAVES({
// //       el: vantaRef.current,
// //       mouseControls: true,
// //       touchControls: true,
// //       gyroControls: false,
// //       minHeight: 200.00,
// //       minWidth: 200.00,
// //       scale: 1.00,
// //       scaleMobile: 1.00,
// //       color: 0x0,
// //       shininess: 50.00,
// //       zoom: 0.7,
// //       THREE,
// //     });

// //     return () => {
// //       if (vantaEffect) vantaEffect.destroy(); // Cleanup the effect on component unmount
// //     };
// //   }, []);

// //   return (
// //     <>
     
// //       {/* className="bg-gradient-to-r from-[#AAC4FF] via-[#D2DAFF] to-[#AAC4FF]" */}
// //     <Router>
// //       <Navbar />

// //        {/* <div className="min-h-screen py-16 " > min-h-screen py-20 */}
// //        <div ref={vantaRef}  style={{ minHeight: "100vh", overflow: "hidden"}}> 
// //         {/* paddingLeft: "80px", paddingRight: "80px" */}
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/services" element={<Services />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route path="/careers" element={<Careers />} />
// //           <Route path="/faq" element={<FAQ />} />
// //           <Route path="/it" element={<ITTraining />} />
// //           <Route path="/services/itservices" element={<Solution/>} />
// //           <Route path="/services/traning" element={<Traning/>} />
// //           <Route path="/services/startups" element={<Startups/>} />
// //           <Route path="/services/smallbusiness" element={<SmallBusiness/>} />
// //         </Routes>
// //       <Footer />
// //       </div>
// //     </Router>
// //     </>
// //   );
// // };

// // export default App;
