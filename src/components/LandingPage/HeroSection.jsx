import { useState } from "react";
import SignupForm from "./SignupForm";

const HeroSection = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); 

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev); 
  };

  return (
    <>
      <section className="relative bg-gray-600 text-white text-center py-60">
        <div className="absolute inset-0">
          <img
            src="/images/heroSectionPicture.jpg"
            alt="Data Analysis Visualization"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Master Data Analytics with SkillUp Academy</h1>
          <p className="text-lg mt-4">Join thousands of learners worldwide.</p>

          {/* Button to show the popup */}
          <button
            onClick={togglePopup}
            className="bg-blue-500 text-white mt-7 px-4 py-4 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105 active:scale-95"
          >
            Enroll Now
          </button>
        </div>
      </section>

      {/* Popup container */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 shadow-lg z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            {/* Close button */}
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <SignupForm />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;