import Link from "next/link";
import Logo from "@/components/ui/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import "./Footer.css";

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
              Fațade la cheie în toată Moldova — termoizolare, armarea pereților și
              finisaj decorativ. O singură echipă, de la evaluare până la predare.
            </p>
            <SocialLinks className="footer-social" />
          </div>

          <div className="footer-col">
            <h4>Navigare</h4>
            <ul>
              <li><Link href="/">Acasă</Link></li>
              <li><Link href="/#calculator">Calculator</Link></li>
              <li><Link href="/materiale">Materiale</Link></li>
              <li><Link href="/#beneficii">Beneficii</Link></li>
              <li><Link href="/despre-noi">Despre noi</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+37360364435">+373 60 364 435</a></li>
              <li><a href="mailto:axiconsdecorgrup@mail.ru">axiconsdecorgrup@mail.ru</a></li>
              <li><span>Chișinău, Moldova</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Axicons Decor Grup. Toate drepturile rezervate.</span>
          <span className="footer-legal">
            <Link href="/termeni-si-conditii">Termeni și condiții</Link>
            <Link href="/confidentialitate">Politica de confidențialitate</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}