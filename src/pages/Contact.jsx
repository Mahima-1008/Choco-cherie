import"../styles/pages.css";
import PageWrapper from "../components/PageWrapper";
import useScrollReveal from "../hooks/useScrollReveal";
function Contact() {
  useScrollReveal(); // 👈 scroll animation

  return (
    <PageWrapper>
      <div className="page">
        <div className="page-container">

        <h1 className="page-title">Contact Us</h1>

        <div className="page-card">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you. Whether it's a custom order,
            feedback, or collaboration — reach out anytime.
          </p>

          <button className="contact-btn">Email Us</button>
        </div>

        <div className="page-card">
          <h2>Our Location</h2>
          <p>
            Choco Cherie, India <br />
            Delivering sweetness nationwide 🍫
          </p>
        </div>

      </div>
    </div>
    </PageWrapper>
  );
}

export default Contact;