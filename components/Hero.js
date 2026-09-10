import "./components/Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="sheet-no">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
              </svg>
              AXI—01
            </span>
            <span className="sep">/</span>
            Renovări · finisaje · amenajări
          </p>

          <h1>
            Case gândite<br />
            din <em>temelii</em>,<br />
            cu grijă.
          </h1>

          <p className="hero-lead">
            Axicons Decor Grup se ocupă de renovări, finisaje și amenajări la cheie —
            de la primul metru pătrat măsurat până la ultimul detaliu montat.
            O singură echipă, coordonată de la plan până la predare.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Solicită consultație gratuită
            </a>
            <a href="#calculator" className="btn btn-ghost">
              Calculează prețul
            </a>
          </div>

          <div className="hero-chips">
            <span className="hero-chip">Renovări complete</span>
            <span className="hero-chip">Amenajări exterioare</span>
            <span className="hero-chip">Design &amp; execuție</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="grid-dots" aria-hidden="true"></div>

            <img
              src="/logo-icon.svg"
              alt=""
              aria-hidden="true"
              className="roof-stack"
            />

            <span className="reg-mark reg-mark--tl" aria-hidden="true"></span>
            <span className="reg-mark reg-mark--br" aria-hidden="true"></span>

            <div className="dim-line" aria-hidden="true">
              <span>6,40 M</span>
            </div>
          </div>

          <div className="hero-brand">
  <b>AXICONS</b>
  <small>DECOR GRUP</small>
</div>
        </div>
      </div>
    </section>
  );
}