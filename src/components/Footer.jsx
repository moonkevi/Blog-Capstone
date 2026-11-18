
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>THE JOURNAL<span>.</span></h2>

        <p>
          Stories that inspire. Ideas that matter.
        </p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/articles">Articles</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 The Journal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;