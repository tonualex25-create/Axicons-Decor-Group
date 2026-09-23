import Link from "next/link";
import "./MaterialDetailPage.css";

const PALETTE = [
  { accent: "#2F8FD6", matSoft: "#EAF4FC" }, // blue
  { accent: "#B3803A", matSoft: "#F6F1E7" }, // warm tan
  { accent: "#5C7085", matSoft: "#EEF1F4" }, // cool grey
  { accent: "#7C5FB0", matSoft: "#F2EFF8" }, // lavender
  { accent: "#C97F1B", matSoft: "#FDF0D9" }, // amber
];

export default function MaterialDetailPage({ breadcrumb, title, subtitle, items }) {
  return (
    <section className="material-detail">
      <div className="page">
        <div className="wrap">
          <nav className="md-breadcrumb" aria-label="breadcrumb">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9.5L10 3l7 6.5" />
              <path d="M5 8v8h10V8" />
            </svg>
            {breadcrumb.map((crumb, i) => (
              <span className="md-crumb" key={crumb.label}>
                {i > 0 && <span className="md-sep">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className="md-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="md-head">
            <span className="md-eyebrow">SISTEM COMPLET · {items.length} MATERIALE</span>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>

          <div className="md-grid">
            {items.map((item, i) => {
              const colors = PALETTE[i % PALETTE.length];
              return (
                <article
                  className="md-card"
                  key={item.name}
                  style={{
                    borderColor: colors.accent,
                    "--card-accent": colors.accent,
                    "--card-mat-soft": colors.matSoft,
                  }}
                >
                  <div className="md-image">
                    <div className="md-image-inner">
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </div>
                  </div>
                  <div className="md-divider" />
                  <div className="md-body">
                    <div className="md-title-row">
                      <span className="md-dot" />
                      <h3>{item.name}</h3>
                    </div>
                    <p className="md-desc">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
