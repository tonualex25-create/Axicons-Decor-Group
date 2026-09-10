import "./components/Works.css";
import Image from "next/image";

export default function Works() {
  return (
    <section id="lucrari" className="works">
      <div className="wrap">
        <div className="works-head">
          <div>
            <p className="eyebrow">
              <span className="sheet-no">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
                </svg>
                AXI—02
              </span>
              <span className="sep">/</span>
              Lucrări finalizate
            </p>
            <h2>Fațade transformate</h2>
          </div>
          <p>
            O selecție de proiecte de fațadă — termoizolare, vopsire și finisaje
            decorative. Fotografiile vor fi adăugate pe măsură ce le organizăm.
          </p>
        </div>

        <div className="works-scroll">
          <article className="work-card">
            <div className="work-photo">
  <Image
    src="/images/casa1.jpg"
    alt="Fațadă termoizolată la o casă rezidențială, finisaj gri deschis"
    fill
    style={{ objectFit: "cover" }}
  />
</div>
            <div className="work-body">
              <h3>Fațadă termoizolată</h3>
              <p>Explicatia fatadei
                accent
                asssssssssssssssssssssssssssssssssssssssss
              </p>
            </div>
          </article>

          <article className="work-card">
            <div className="work-photo">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="8" width="36" height="32" rx="2" />
                <circle cx="17" cy="18" r="3" />
                <path d="M6 32l10-10 8 8 6-6 12 12" />
              </svg>
            </div>
            <div className="work-body">
              <h3>Fațadă ventilată</h3>
            </div>
          </article>

          <article className="work-card">
            <div className="work-photo">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="8" width="36" height="32" rx="2" />
                <circle cx="17" cy="18" r="3" />
                <path d="M6 32l10-10 8 8 6-6 12 12" />
              </svg>
            </div>
            <div className="work-body">
              <h3>Vopsire &amp; finisaj decorativ</h3>
            </div>
          </article>

          <article className="work-card">
            <div className="work-photo">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="8" width="36" height="32" rx="2" />
                <circle cx="17" cy="18" r="3" />
                <path d="M6 32l10-10 8 8 6-6 12 12" />
              </svg>
            </div>
            <div className="work-body">
              <h3>Consolidare &amp; reparație fisuri</h3>
            </div>
          </article>

          <article className="work-card">
            <div className="work-photo">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="8" width="36" height="32" rx="2" />
                <circle cx="17" cy="18" r="3" />
                <path d="M6 32l10-10 8 8 6-6 12 12" />
              </svg>
            </div>
            <div className="work-body">
              <h3>Fațadă cu piatră decorativă</h3>
            </div>
          </article>

          <article className="work-card">
            <div className="work-photo">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="8" width="36" height="32" rx="2" />
                <circle cx="17" cy="18" r="3" />
                <path d="M6 32l10-10 8 8 6-6 12 12" />
              </svg>
            </div>
            <div className="work-body">
              <p className="work-tag">Termoizolare acoperiș</p>
              <h3>Termoizolare acoperiș &amp; fațadă</h3>
              <p>Casă la roșu · proiect complet</p>
            </div>
          </article>
        </div>

        <p className="works-hint">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          Glisează pentru mai multe lucrări
        </p>
      </div>
    </section>
  );
}