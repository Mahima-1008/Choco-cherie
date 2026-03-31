import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">Choco Cherie</h2>

      <div className="footer-links">
        <p>Terms & Conditions</p>
        <p>Terms of Use</p>
        <p>Privacy Notice</p>
        <p>Contact Us</p>
        <p>Accessibility</p>
      </div>

      <p className="copyright">
        © 2026 Choco Cherie. All rights reserved.
      </p>
    </footer>
  );
}