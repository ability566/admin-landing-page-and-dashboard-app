import { Helmet } from "react-helmet-async";
import AboutSection from "../components/LandingPage/AboutSection";
import FeaturesSection from "../components/LandingPage/FeaturesSection";
import HeroSection from "../components/LandingPage/HeroSection";
import SuggestedCourses from "../components/LandingPage/SuggestedCourses";
import TestimonialsSection from "../components/LandingPage/TestimonialsSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>SkillUp Academy - Learn & Grow</title>
        <meta name="description" content="Join SkillUp Academy to enhance your data analysis skills with expert-led courses." />
        <meta name="keywords" content="SkillUp Academy, Data Analysis, Online Learning, Enroll Now" />
        <meta name="author" content="SkillUp Academy Team" />
        <meta property="og:title" content="SkillUp Academy - Learn & Grow" />
        <meta property="og:description" content="Boost your career with SkillUp Academy's expert-led courses in data analysis." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.skillupacademy.com" />
        <meta property="og:image" content="https://www.skillupacademy.com/preview-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SkillUp Academy - Learn & Grow" />
        <meta name="twitter:description" content="Join SkillUp Academy to master data analysis with top-tier instructors." />
        <meta name="twitter:image" content="https://www.skillupacademy.com/preview-image.jpg" />
      </Helmet>

      <div className="font-['Lexend'] text-gray-900">
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <FeaturesSection />
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="suggested-courses">
          <SuggestedCourses />
        </div>
        <div id="signup-form">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
