
import { Helmet } from "react-helmet";
import React, { useEffect , useRef} from "react";
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


// Dynamic import for TubesCursor to avoid SSR issues
const loadTubesCursor = async () => {
  if (typeof window !== 'undefined') {
    const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js')
    return module.default
  }
  return null
}

const Home = () => {

  const canvasRef = useRef(null)
   useEffect(() => {
      let AOS // Declare AOS here
      let app = null
  
      // Initialize AOS
      import("aos").then((aosModule) => {
        AOS = aosModule
        AOS.init({
          duration: 1200,
          easing: "ease-in-out",
          once: false,
          offset: 100,
        })
  
        window.addEventListener("scroll", () => {
          AOS.refresh()
        })
      })
  
      // Initialize TubesCursor
      const initTubesCursor = async () => {
        if (canvasRef.current) {
          try {
            const TubesCursor = await loadTubesCursor()
            if (TubesCursor) {
              app = TubesCursor(canvasRef.current, {
                tubes: {
                  colors: ["#f967fb", "#53bc28", "#6958d5"],
                  lights: {
                    intensity: 200,
                    colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
                  }
                }
              })
            }
          } catch (error) {
            console.error("Error initializing TubesCursor:", error)
          }
        }
      }
  
      initTubesCursor()
  
      return () => {
        // Cleanup
        if (app && typeof app.destroy === 'function') {
          app.destroy()
        }
        window.removeEventListener("scroll", () => {
          if (AOS) AOS.refresh()
        })
      }
    }, [])

  return (
    <div>
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

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
