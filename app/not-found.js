import Link from "next/link";
import "./not-found.css";

export const metadata = {
  title: "Pagina nu există",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap not-found-inner">
        <p className="not-found-code">404</p>
        <h1>Pagina nu există</h1>
        <p>Adresa poate fi greșită sau pagina a fost mutată. Poți continua de pe prima pagină.</p>
        <div className="not-found-actions">
          <Link href="/" className="btn btn-primary">Mergi la prima pagină</Link>
          <Link href="/materiale" className="btn btn-ghost">Vezi materialele</Link>
        </div>
      </div>
    </main>
  );
}
