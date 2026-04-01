import "../styles/footer.css";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="links">
        <p>Terms & Conditions</p>
        <p>Terms of Use</p>
        <p>Privacy Notice</p>
        <p>Contact Us</p>
        <p>Accessibility</p>
      </div>

      <div className="socials">
        <FaInstagram />
        <FaFacebook />
        <FaLinkedin />
      </div>

      <p>© 2026 Choco Cherie</p>
    </footer>
  );
}