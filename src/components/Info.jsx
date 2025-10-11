import React from 'react';

const Info = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center ">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h2>
      {/* The fix for mobile spacing is on the line below: 'mx-4' */}
      <div className="flex justify-center items-center mt-10 p-8 rounded-2xl bg-white max-w-md md:max-w-xl mx-4"> 
        <div className="flex flex-col md:flex-row items-center gap-8 w-full"> 
          <div className="flex flex-col items-start gap-4 flex-1"> 
            <p className="text-gray-600 text-lg">
              <strong>Email:</strong> 
              <a href="mailto:Support@BoostNow.in" className="text-blue-500 hover:underline ml-1">support@boostNow.in</a>
            </p>
          </div>
          <div className="flex justify-center items-center flex-1"> 
            <img 
              src="/contactus.gif" 
              alt="Contact Us Animation" 
              className="w-52 h-52 md:w-64 md:h-64" 
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
      <Info id="contact" />
    </div>
  );
};

export default App;