
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div className="footer-container">


      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
            CarpenStream Pedals
            </Link>
          </div>
          <small class="website-rights">CarpenStream Pedals © 2021</small>
          <div class="social-icons">
            <Link
              onClick={() => openInNewTab('https://github.com/PeterMGuy')}
              class="social-icon-link github"
              to="https://github.com/PeterMGuy"
              target="https://github.com/PeterMGuy"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>

            <Link
              onClick={() => openInNewTab('https://www.linkedin.com/in/p-moua/')}
              class="social-icon-link linkedin"
              to="https://www.linkedin.com/in/p-moua/"
              target="https://www.linkedin.com/in/p-moua/"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;