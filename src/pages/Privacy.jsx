import"../styles/pages.css";
import PageWrapper from "../components/PageWrapper";
import useScrollReveal from "../hooks/useScrollReveal";
function Privacy() {
  useScrollReveal(); // 👈 scroll animation

  return (
    <PageWrapper>
      <div className="page">
        <div className="page-container">

        <h1 className="page-title">Privacy Policy</h1>

        <div className="page-card">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email,
            and address to process orders and improve your experience.
          </p>
        </div>

        <div className="page-card">
          <h2>How We Use Your Data</h2>
          <p>
            Your data is used only for order processing, communication,
            and enhancing our services.
          </p>
        </div>

        <div className="page-card">
          <h2>Your Privacy Matters</h2>
          <p>
            We never sell or share your personal information with third parties.
          </p>
        </div>

      </div>
    </div>
    </PageWrapper>
  );
}

export default Privacy;