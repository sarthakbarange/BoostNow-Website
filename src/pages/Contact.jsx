import React, { useEffect, Suspense, lazy, memo } from 'react';
import { Helmet } from "react-helmet";

// 🚀 Use React.lazy() for code-splitting. This loads components on-demand,
// reducing the initial bundle size and improving the page's initial load time.
const LazyForm = lazy(() => import('../components/Form'));
const LazySupport = lazy(() => import('../components/Support'));
const LazyInfo = lazy(() => import('../components/Info'));

// 🧠 Use React.memo() to prevent unnecessary re-renders. This is a key
// performance optimization that skips rendering if the component's props haven't changed.
const MemoizedForm = memo(LazyForm);
const MemoizedSupport = memo(LazySupport);
const MemoizedInfo = memo(LazyInfo);

const Contact = () => {
  useEffect(() => {
    // This client-side function handles scrolling to a specific element.
    // It's not a backend function and remains unchanged.
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <>
      <Helmet>
        <title>Contact | BoostNow</title>
        <meta name="description" content="Get in touch with BoostNow for expert IT solutions, including web development, cybersecurity, ERP, and business automation. Contact us today to discuss your project or partnership opportunities." />
        <meta name="keywords" content="Contact BoostNow, IT services contact, software development inquiries, business consultation, cybersecurity solutions, ERP solutions, web development support, IT partnerships, technology consulting" />
      </Helmet>
      
      <div className='relative z-10'>
        {/* ⏳ Use <Suspense> for lazy-loaded components. This will display
            a "Loading..." message until the components are ready. */}
        <Suspense fallback={<div>Loading...</div>}>
          <MemoizedForm />
          <MemoizedSupport id="support" />
          <MemoizedInfo id="info" />
        </Suspense>
      </div>
    </>
  );
};

export default Contact;