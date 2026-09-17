"use client";

import { useState } from "react";
import "./components/Contact.css";

const SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbylcS0BX2i6V6Pms0TN9myJMNcEX_SJ2VvblxwL2-QPlBW2SKKaBduXrHJUGXJS1FJl1A/exec";

export default function Contact() {
  const [values, setValues] = useState({ nume: "", prenume: "", telefon: "" });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate() {
    const next = {};
    if (values.nume.trim().length < 2) next.nume = "Introdu numele.";
    if (values.prenume.trim().length < 2) next.prenume = "Introdu prenumele.";
    if (!/^[0-9+\s()-]{7,}$/.test(values.telefon.trim())) {
      next.telefon = "Introdu un număr de telefon valid.";
    }
    if (!consent) {
      next.consent = "Trebuie să fii de acord înainte de a trimite.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const body = new URLSearchParams(values);

      await fetch(SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      setStatus("success");
      setValues({ nume: "", prenume: "", telefon: "" });
      setConsent(false);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="sheet-no">
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
              </svg>
              AXI—05
            </span>
            <span className="sep">/</span>
            Hai să vorbim
          </p>
          <h2>Solicită o consultație</h2>
          <p className="contact-lead">
            Lasă-ne datele tale de contact — revenim cu o programare pentru
            evaluarea gratuită a fațadei.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className={`form-field ${errors.nume ? "invalid" : ""}`}>
              <label htmlFor="inpNume">Nume</label>
              <input
                type="text"
                id="inpNume"
                autoComplete="family-name"
                value={values.nume}
                onChange={handleChange("nume")}
              />
              {errors.nume && <small className="err">{errors.nume}</small>}
            </div>

            <div className={`form-field ${errors.prenume ? "invalid" : ""}`}>
              <label htmlFor="inpPrenume">Prenume</label>
              <input
                type="text"
                id="inpPrenume"
                autoComplete="given-name"
                value={values.prenume}
                onChange={handleChange("prenume")}
              />
              {errors.prenume && <small className="err">{errors.prenume}</small>}
            </div>
          </div>

          <div className={`form-field ${errors.telefon ? "invalid" : ""}`}>
            <label htmlFor="inpTelefon">Număr de telefon</label>
            <input
              type="tel"
              id="inpTelefon"
              autoComplete="tel"
              placeholder="+373 6X XXX XXX"
              value={values.telefon}
              onChange={handleChange("telefon")}
            />
            {errors.telefon && <small className="err">{errors.telefon}</small>}
          </div>

          <div className={`consent-wrap ${errors.consent ? "invalid" : ""}`}>
            <label className="consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>
                Sunt de acord ca datele mele să fie folosite pentru a fi
                contactat/ă de Axicons Decor Grup în legătură cu această
                solicitare, conform{" "}
                <a
                  href="/confidentialitate"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Politicii de confidențialitate
                </a>
                .
              </span>
            </label>
            {errors.consent && <small className="err">{errors.consent}</small>}
          </div>

          <div className="submit-row">
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Se trimite…" : "Trimite cererea"}
            </button>

            {status === "success" && (
              <span className="form-status success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Mulțumim! Te contactăm în curând.
              </span>
            )}

            {status === "error" && (
              <span className="form-status error">
                Ceva nu a mers bine. Încearcă din nou sau sună-ne direct.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}