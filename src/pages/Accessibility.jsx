import "../styles/pages.css";
import PageWrapper from "../components/PageWrapper";
import useScrollReveal from "../hooks/useScrollReveal";
function Accessibility() {
  useScrollReveal(); // 👈 scroll animation

  return (
    <PageWrapper>
      <div className="page">
          <div className="page-container">

        <h1 className="page-title">Accessibility</h1>

        <div className="page-card">
          <h2>Our Commitment</h2>
          <p>
            We are committed to making our website accessible to everyone,
            including users with disabilities.
          </p>
        </div>

        <div className="page-card">
          <h2>Continuous Improvement</h2>
          <p>
            We continuously work on improving usability, navigation,
            and readability across all devices.
          </p>
        </div>

      </div>
    </div>
    </PageWrapper>
  );
}

export default Accessibility;