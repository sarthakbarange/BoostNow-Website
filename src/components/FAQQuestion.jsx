import React from "react";

const FAQQuestion = () => {
  return (
    <div className="min-h-screen flex items-center justify-center sm:p-6 p-2">
      <div className="w-full max-w-3xl bg-white sm:p-8 p-4 rounded-xl shadow-lg">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-center mb-10">
          FAQ
        </h2>
        <div className="space-y-6">
          {/* FAQ Item */}
          {[ 
            {
              question: "What ERP solutions does BoostNow provide?",
              answer:
                "BoostNow offers ERP solutions tailored to your business needs, helping streamline operations, improve data accuracy, and enhance decision-making processes.",
            },
            {
              question: "How can BoostNow's IT solutions benefit my business?",
              answer:
                "BoostNow provides a wide range of IT solutions including cloud computing, software development, system integrations, and network security to ensure your business stays competitive and secure.",
            },
            {
              question: "What IT training programs does BoostNow offer?",
              answer:
                "BoostNow offers IT training programs that cover a variety of areas including software development, networking, cybersecurity, and cloud computing, designed to enhance your team's skills and knowledge.",
            },
            {
              question: "How can I apply for an internship at BoostNow?",
              answer:
                "You can apply for an internship at BoostNow by visiting our careers page. We offer hands-on experience in areas like IT solutions, software development, and ERP systems, providing a great learning opportunity.",
            },
            {
              question: "What kind of IT consulting services does BoostNow provide?",
              answer:
                "BoostNow's IT consulting services help businesses optimize their IT infrastructure, implement new technologies, and ensure smooth system integration. We guide you through digital transformation and help solve technical challenges.",
            },
            {
              question: "Can BoostNow help with custom software development?",
              answer:
                "Yes, BoostNow specializes in custom software development. We work with you to create software tailored to your business requirements, improving efficiency and user experience.",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-100 sm:p-4 rounded-lg shadow-md transition-transform duration-200"
            >
              <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                {faq.question}
                <span className="ml-4 transform group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <p className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQQuestion;
