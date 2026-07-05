import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} IntellMeet. Built for internship project purposes.</p>
      <div className="footer__links">
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="#help">Help</a>
      </div>
    </footer>
  );
}

export default Footer;