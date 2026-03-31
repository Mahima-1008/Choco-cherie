import "../styles/footer.css";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">Choco Cherie</h2>

      {/* LINKS */}
      <div className="footer-links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Contact Us</a>
        <a href="#">Accessibility</a>
      </div>

      {/* SOCIAL ICONS */}
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>

      <p className="copyright">
        © 2026 Choco Cherie. All rights reserved.
      </p>
    </footer>
  );
}