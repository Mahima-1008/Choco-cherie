import "../styles/pages.css";
import PageWrapper from "../components/PageWrapper";
import useScrollReveal from "../hooks/useScrollReveal";

function TermsConditions() {
  useScrollReveal(); // 👈 scroll animation

  return (
    <PageWrapper>
      <div className="page">
        <div className="page-container">

          <h1 className="page-title">Terms & Conditions</h1>

          <div className="page-card">
            <h2>Use of Our Website</h2>
            <p>
              By accessing Choco Cherie, you agree to use our website responsibly
              and in accordance with all applicable laws.
            </p>
          </div>

          <div className="page-card">
            <h2>Products & Orders</h2>
            <p>
              All our chocolates are handcrafted with care. Availability,
              pricing, and delivery may vary based on demand.
            </p>
          </div>

          <div className="page-card">
            <h2>Intellectual Property</h2>
            <p>
              All content including images, branding, and design belongs to
              Choco Cherie and may not be reused without permission.
            </p>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}

export default TermsConditions;