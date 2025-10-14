import React from 'react';

const Info = ({ id }) => {
  return (
    // The main section container
    <section id={id} className="min-h-screen flex flex-col justify-center items-center ">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h2>
      
      {/* MODIFIED: 
        - Changed the background color from 'bg-white' to 'bg-[#1b2332]'.
        - This div now uses the custom dark color for a consistent theme.
      */}
      <div className="flex justify-center items-center mt-10 p-8 rounded-2xl bg-[#1b2332] max-w-md md:max-w-xl mx-4"> 
        <div className="flex flex-col md:flex-row items-center gap-8 w-full"> 
          <div className="flex flex-col items-start gap-4 flex-1"> 
            
            {/* MODIFIED: 
              - Changed text color from 'text-gray-600' to 'text-white' for readability.
              - Updated link color from 'text-blue-500' to 'text-blue-400' for better contrast.
            */}
            <p className="text-white text-lg">
              <strong>Email:</strong> 
              <a href="mailto:Support@BoostNow.in" className="text-blue-400 hover:underline ml-1">support@boostNow.in</a>
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

// The main App component to render the Info section
const App = () => {
  return (
    <div>
      <Info id="contact" />
    </div>
  );
};

export default App;