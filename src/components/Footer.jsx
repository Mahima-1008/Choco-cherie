import "../styles/footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

      <div className="footer-links">

        <Link to="/terms-conditions">Terms & Conditions</Link>
        
        <Link to="/privacy">Privacy Notice</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/accessibility">Accessibility</Link>

      </div>

      {/* SOCIAL ICONS */}
      <div className="socials">

        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>

        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>

        <a href="https://linkedin.com" target="_blank">
          <FaLinkedinIn />
        </a>

      </div>

      <p>© 2026 Choco Cherie</p>

    </div>
  );
}

export default Footer;