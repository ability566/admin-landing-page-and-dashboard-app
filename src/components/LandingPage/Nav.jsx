import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center px-6 py-3 ${
        location.pathname === "/" ? (scrolled ? "bg-gray-600 shadow-md" : "bg-transparent") : "bg-gray-600"
      }`}
    >
      <Link
        to="/"
        className="text-2xl font-bold text-white transition-transform transform hover:scale-105"
      >
        SkillUp Academy
      </Link>

      <div className="hidden md:flex items-center space-x-6 ml-auto">
        <button
          onClick={() => handleScroll("about")}
          className="hover:underline text-white transition-transform transform hover:scale-105"
        >
          About Us
        </button>
        <button
          onClick={() => handleScroll("testimonials")}
          className="hover:underline text-white transition-transform transform hover:scale-105"
        >
          Testimonials
        </button>
        <Link to="/faqs" className="hover:underline text-white transition-transform transform hover:scale-105">
          FAQs
        </Link>
        <Link to="/contact" className="hover:underline text-white transition-transform transform hover:scale-105">
          Contact Us
        </Link>

        {location.pathname === "/" && (
          <button
            onClick={handleAdminLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-110 hover:bg-blue-600 ml-10"
          >
            Admin
          </button>
          
        )}
      </div>
    </nav>
  );
};

export default Nav;
