import "./components/Benefits.css";

export default function Benefits() {
  return (
    <section id="beneficii" className="benefits">
      <div className="benefits-bg" aria-hidden="true"></div>

      <div className="wrap">
        <div className="benefits-head">
          <div>
            <p className="eyebrow">
              <span className="sheet-no">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
                </svg>
                AXI—04
              </span>
              <span className="sep">/</span>
              De ce Axicons
            </p>
            <h2>Lucrăm ca o echipă<br />în care te poți baza</h2>
          </div>
          <p>Șase motive pentru care clienții noștri revin la fiecare proiect nou.</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <h3>Consultanță gratuită</h3>
            <p>Măsurători și evaluare la fața locului, fără costuri și fără obligații.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3>Garanție la lucrări</h3>
            <p>Fiecare fațadă finalizată e acoperită de garanție scrisă.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            </div>
            <h3>Termene respectate</h3>
            <p>Grafic de lucru clar, comunicat de la început și urmărit zilnic.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7l9-4 9 4-9 4-9-4z" />
                <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
              </svg>
            </div>
            <h3>Materiale verificate</h3>
            <p>Sisteme și materiale certificate, testate în timp.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11V5a2 2 0 0 1 2-2h6l10 10-8 8L3 11z" />
                <circle cx="8" cy="8" r="1.5" />
              </svg>
            </div>
            <h3>Preț transparent</h3>
            <p>Deviz detaliat, fără costuri ascunse sau suplimentări surpriză.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="8" r="3" />
                <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
                <circle cx="18" cy="9" r="2.4" />
                <path d="M16.5 20c.2-2.6 2.2-4.7 4.9-5" />
              </svg>
            </div>
            <h3>Echipă proprie</h3>
            <p>Muncitori angajați direct, coordonați de un singur responsabil de șantier.</p>
          </div>
        </div>
      </div>
    </section>
  );
}