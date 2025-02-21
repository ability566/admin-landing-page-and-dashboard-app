 
import { Twitter } from 'lucide';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">YourBrand</h2>
          <p>
            YourBrand is a leading company in the industry, providing top-notch services and products to our clients.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 123-456-7890</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@yourbrand.com</span>
          </div>
          <div className="socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          </div>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
            <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} YourBrand | Designed by YourName
      </div>
    </footer>
  );
};

export default Footer;