import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import "./MaterialDetailPage.css";

const PALETTE = [
  { accent: "#2F8FD6", matSoft: "#EAF4FC" },
  { accent: "#B3803A", matSoft: "#F6F1E7" },
  { accent: "#5C7085", matSoft: "#EEF1F4" },
  { accent: "#7C5FB0", matSoft: "#F2EFF8" },
  { accent: "#C97F1B", matSoft: "#FDF0D9" },
];

const PLACEHOLDER = "/images/hero-axicons-v2.webp";

export default function MaterialDetailPage({
  path,
  breadcrumb,
  title,
  subtitle,
  items,
  article = [],
  price,
  faq = [],
  prev,
  next,
}) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.label,
        item: `${SITE.url}${crumb.href ?? path}`,
      })),
    },
  ];
  if (faq.length) {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    });
  }

  return (
    <main className="material-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="page">
        <div className="wrap">
          <nav className="md-breadcrumb" aria-label="Breadcrumb">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9.5L10 3l7 6.5" />
              <path d="M5 8v8h10V8" />
            </svg>
            {breadcrumb.map((crumb, i) => (
              <span className="md-crumb" key={crumb.label}>
                {i > 0 && <span className="md-sep" aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span className="md-current" aria-current="page">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="md-head">
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>

          <h2 className="md-section-title">Materialele folosite</h2>
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
                      <Image
                        src={item.image ?? PLACEHOLDER}
                        alt={item.image ? item.name : `Echipa Axicons la lucru: ${item.name.toLowerCase()}`}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px"
                        preload={i === 0}
                      />
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

          {article.length > 0 && (
            <div className="md-article">
              {article.map((section) => (
                <section key={section.title} className="md-article-section">
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  {section.list && (
                    <ul>
                      {section.list.map((li) => (
                        <li key={li.slice(0, 40)}>{li}</li>
                      ))}
                    </ul>
                  )}
                  {section.after?.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </section>
              ))}
            </div>
          )}

          {price && (
            <aside className="md-price" aria-label="Preț">
              <dl className="md-price-list">
                <div>
                  <dt>{price.label}</dt>
                  <dd>{price.perM2} lei/m²</dd>
                </div>
                <div>
                  <dt>Pachet complet la cheie</dt>
                  <dd>1000 lei/m²</dd>
                </div>
              </dl>
              <Link href="/#calculator" className="btn btn-primary">Calculează prețul</Link>
              <p className="md-price-note">
                Schela și transportul sunt incluse. Prețul final îl stabilim după evaluarea
                gratuită.
              </p>
            </aside>
          )}

          {faq.length > 0 && (
            <section className="md-faq">
              <h2>Întrebări despre {title.toLowerCase()}</h2>
              <div className="md-faq-list">
                {faq.map(({ q, a }) => (
                  <details key={q} className="md-faq-item">
                    <summary>
                      {q}
                      <span className="md-faq-icon" aria-hidden="true"></span>
                    </summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {(prev || next) && (
            <nav className="md-steps" aria-label="Etapele fațadei">
              {next && (
                <Link href={next.href} className="md-next">
                  <span className="md-next-label">
                    {next.href.startsWith("/materiale") ? "Etapa următoare" : "Următorul pas"}
                  </span>
                  <span className="md-next-title">
                    {next.label}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                  {next.text && <span className="md-next-text">{next.text}</span>}
                </Link>
              )}
              {prev && (
                <Link href={prev.href} className="md-prev">
                  Etapa anterioară: {prev.label}
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </main>
  );
}
