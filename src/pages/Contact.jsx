import React, { useEffect } from "react";
import Form from "../components/Form";
import Support from "../components/Support";
import Info from "../components/Info";
import { Helmet } from "react-helmet";

const Contact = () => {
  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
    } catch (err) {
      console.error("Hash scroll error:", err);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact | BoostNow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* other meta tags */}
      </Helmet>
      <div className="relative z-10 w-full min-h-screen bg-black overflow-hidden">
        <Form />
        <Support id="support" />
        <Info id="info" />
      </div>
    </>
  );
};

export default Contact;