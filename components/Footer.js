import Logo from "@/components/Logo";
import "./components/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <Logo />
              <b>AXICONS DECOR GRUP</b>
            </div>
            <p className="footer-lead">
              Amenajări de fațadă la cheie — termoizolare, fațade ventilate și
              finisaje decorative. O singură echipă, de la evaluare până la predare.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.5 1.6-1.5h1.6V3.7C15.9 3.6 15 3.5 14 3.5c-2.4 0-4 1.5-4 4.1v2.3H7.3V13H10v8z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigare</h4>
            <ul>
              <li><a href="#top">Acasă</a></li>
              <li><a href="#lucrari">Lucrări</a></li>
              <li><a href="#calculator">Calculator</a></li>
              <li><a href="#beneficii">Beneficii</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+37360364435">+373 60 364 435</a></li>
              <li><a href="mailto:axiconsdecorgrup@mail.ru">axiconsdecorgrup@mail.ru</a></li>
              <li><a href="#">Chișinău, Moldova</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
  <span>© {year} Axicons Decor Grup. Toate drepturile rezervate.</span>
  <a href="/confidentialitate">Politica de confidențialitate</a>
</div>
      </div>
    </footer>
  );
}