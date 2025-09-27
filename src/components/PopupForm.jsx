

import React, { useState } from "react";

const PopupForm = ({ serviceTitle, closeForm, }) => {
  const [formData, setFormData] = useState({
    service:serviceTitle,
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Data Submitted:", formData);
  //   closeForm();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbw1YlJloCqSC9x52IGSMFLs4cky8Q8dcD_kNSGokK8mjrWlN-hQIaKhd84w8qiKqfwX/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(formData),
        });

        console.log("Data successfully sent to Google Sheets");
        // setModalOpen(false); // Close modal after submitting
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          phoneNumber: "",
          service:"",
        })
        closeForm();
        // console.log("dialCode"+country.dialCode)
        // alert("Data successfully sent to Google Sheets")
    } catch (error) {
        console.error("Error:", error);
    }
};
  return (
    <div className=" fixed  inset-0 z-50  bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3 w-[80vw]">
        <h2 className="text-xl font-bold mb-4">Sign Up for {serviceTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        <button
          onClick={closeForm}
          className="mt-4 text-gray-500 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
