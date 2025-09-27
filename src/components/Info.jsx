import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Info = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center text-white">Contact Us</h2>
      <div className="flex justify-center items-center mt-10 p-8 rounded-2xl bg-white w-[500px]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col items-start gap-4">
            <p className="text-gray-600 text-lg mb-4">
              <strong>Email:</strong> 
              <a href="mailto:Support@BoostNow.in" className="text-blue-500 hover:underline">support@boostNow.in</a>
            </p>
            {/* <p className="text-gray-600 text-lg mb-4">
              <strong>Call Us:</strong> 
              <a href="tel:+919325919149" className="text-blue-500 hover:underline">+91-9325919149</a>
            </p> */}
          </div>
          <div className="flex justify-center items-center">
            <DotLottieReact
              src="https://lottie.host/de81b8ad-87a3-4e65-ab62-1b81ce71bf4a/C71JlNz4pJ.lottie" // Use the provided Lottie animation URL
              loop
              autoplay
              className="w-40 h-40" // Add custom styles if needed
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const App = () => {
  return (
    <div>
      <Info id="contact" /> {/* Integrate Info component here */}
    </div>
  );
};

export default App;
