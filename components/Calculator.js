"use client";

import { useRef, useState } from "react";
import "./components/Calculator.css";

const SERVICES = [
  {
    key: "termo",
    title: "Termoizolare",
    price: 450,
    details: ["Polistiren 10cm", "Adeziv", "Ciuperci", "Spumă", "Capace"],
  },
  {
    key: "armare",
    title: "Armarea pereților",
    price: 300,
    details: ["Adeziv", "Plasă 160g", "Colțare", "Picurătoare", "Profil geam"],
  },
  {
    key: "finisaj",
    title: "Finisaj decorativ",
    price: 470,
    details: ["Grunt", "Tencuială Caparol"],
  },
];

const BUNDLE_PRICE_PER_M2 = 1000;
const SEPARATE_PRICE_PER_M2 = SERVICES.reduce((sum, s) => sum + s.price, 0); // 1220
const SAVINGS_PERCENT = Math.round((1 - BUNDLE_PRICE_PER_M2 / SEPARATE_PRICE_PER_M2) * 100); // 18

const fmt = (n) => new Intl.NumberFormat("ro-RO").format(Math.round(n));

export default function Calculator() {
  const [area, setArea] = useState("");
  const [selected, setSelected] = useState({ termo: false, armare: false, finisaj: false });
  const [showAreaWarning, setShowAreaWarning] = useState(false);
  const [shake, setShake] = useState(false);

  const areaInputRef = useRef(null);
  const warningTimerRef = useRef(null);
  const shakeTimerRef = useRef(null);

  const numArea = Math.max(0, Number(area) || 0);

  const warnMissingArea = () => {
    setShowAreaWarning(true);
    setShake(true);
    areaInputRef.current?.focus();
    clearTimeout(shakeTimerRef.current);
    shakeTimerRef.current = setTimeout(() => setShake(false), 400);
    clearTimeout(warningTimerRef.current);
    warningTimerRef.current = setTimeout(() => setShowAreaWarning(false), 2500);
  };

  const toggleService = (key) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAll = () => {
    const allSelected = SERVICES.every((s) => selected[s.key]);
    const next = {};
    SERVICES.forEach((s) => {
      next[s.key] = !allSelected;
    });
    setSelected(next);
  };
  const selectedServices = SERVICES.filter((s) => selected[s.key]);
  const selectedCount = selectedServices.length;
  const allSelected = selectedCount === SERVICES.length;

  const bundleTotal = numArea * BUNDLE_PRICE_PER_M2;
  const originalTotal = numArea * SEPARATE_PRICE_PER_M2;
  const savingsLei = originalTotal - bundleTotal;

  const sumPerM2 = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const partialTotal = numArea * sumPerM2;

  return (
    <section id="calculator" className="calculator">
      <div className="wrap">
        <div className="calc-head">
          <div>
            <p className="eyebrow">
              <span className="tag">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
                </svg>
                AXI-03
              </span>
              <span>/</span>
              <span>ESTIMARE COST</span>
            </p>
            <h2>Calculează prețul</h2>
          </div>
          <p>
            Introdu suprafața fațadei și alege serviciile de care ai nevoie — sau alege pachetul
            complet pentru cel mai avantajos preț.
          </p>
        </div>

        <div className="calc-card">
          <svg className="corner-mark tl" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
          </svg>

          <div className="calc-form">
            <div className="field">
              <label htmlFor="calcArea">Suprafață fațadă</label>
              <div className={`input-row${shake ? " shake" : ""}`}>
                <input
                  ref={areaInputRef}
                  type="number"
                  id="calcArea"
                  min="0"
                  max="999999999"
                  step="1"
                  inputMode="numeric"
                  placeholder="ex: 45"
                  value={area}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length > 9) return;
                    setArea(val);
                    if (Number(val) > 0) setShowAreaWarning(false);
                  }}
                />
                <span className="unit">M²</span>
              </div>
              <p className={`area-warning${showAreaWarning ? " show" : ""}`} role="alert">
                Introdu suprafața fațadei mai întâi.
              </p>
            </div>

            <div>
              <div className="svc-block-head">
                <span className="svc-label">Alege serviciile</span>
                <span className="svc-count">{selectedCount}/{SERVICES.length} selectate</span>
              </div>

              <div className="svc-list">
                {SERVICES.map((s) => (
                  <label className="svc-row" key={s.key}>
                    <input
                      type="checkbox"
                      className="svc-checkbox"
                      checked={selected[s.key]}
                      onClick={(e) => {
                        if (numArea <= 0) {
                          e.preventDefault();
                          warnMissingArea();
                        }
                      }}
                      onChange={() => toggleService(s.key)}
                    />
                    <span className="svc-box">
                      <svg
                        className="svc-check"
                        width="11"
                        height="8"
                        viewBox="0 0 12 9"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 4.5L4.2 7.5L11 1" />
                      </svg>
                    </span>
                    <span style={{ flex: 1 }}>
                      <span className="svc-top">
                        <span className="svc-title">{s.title}</span>
                        <span className="svc-price">{s.price} lei/m²</span>
                      </span>
                      {selected[s.key] && (
                        <span className="svc-details">
                          {s.details.map((d) => (
                            <span key={d}>{d}</span>
                          ))}
                        </span>
                      )}
                    </span>
                  </label>
                ))}
              </div>

              <p className="svc-note">Schela și transportul sunt incluse la toate variantele.</p>
            </div>

            <label className={`allin${allSelected ? " is-all" : ""}`}>
              <input
                type="checkbox"
                className="allin-checkbox"
                checked={allSelected}
                onClick={(e) => {
                  if (numArea <= 0) {
                    e.preventDefault();
                    warnMissingArea();
                  }
                }}
                onChange={toggleAll}
              />
              <span className="allin-copy">
                <span className="allin-title-row">
                  <span className="allin-title">Alege tot inclus</span>
                  <span className="allin-badge">−{SAVINGS_PERCENT}% REDUCERE</span>
                </span>
                <span className="allin-sub">
                  Cel mai convenabil pachet — toate cele 3 servicii, la un preț mai bun.
                </span>
              </span>
              <span className="switch">
                <span className="knob" />
              </span>
            </label>
          </div>

          <div className="calc-result">
            <div className="res-inner">
              {allSelected ? (
                <div>
                  <div className="price-card">
                    <p className="res-eyebrow">Pachet tot inclus</p>
                    <p className="res-value">
                      {fmt(bundleTotal)}
                      <span>LEI</span>
                    </p>
                    {numArea > 0 && (
                      <p className="res-strike">{fmt(originalTotal)} lei fără reducere</p>
                    )}
                  </div>
                  <div className="res-breakdown">
                    <div>
                      <span>Suprafață</span>
                      <span>{numArea > 0 ? `${numArea} m²` : "— m²"}</span>
                    </div>
                    <div>
                      <span>Preț / m²</span>
                      <span>{BUNDLE_PRICE_PER_M2} lei</span>
                    </div>
                    <div className="save">
                      <span>Economie</span>
                      <span>−{fmt(savingsLei)} lei</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="price-card">
                    <p className="res-eyebrow">Pachet personalizat</p>
                    <p className="res-value">
                      {fmt(partialTotal)}
                      <span>LEI</span>
                    </p>
                  </div>

                  {selectedCount === 0 ? (
                    <p className="res-empty">Alege cel puțin un serviciu pentru a vedea prețul.</p>
                  ) : (
                    <div className="res-list">
                      {selectedServices.map((s) => (
                        <div key={s.key}>
                          <span>{s.title}</span>
                          <span>{fmt(s.price * numArea)} lei</span>
                        </div>
                      ))}
                      <div style={{ borderTop: "1px solid rgba(234,241,248,0.14)", marginTop: 4, paddingTop: 9 }}>
                        <span>Total / m²</span>
                        <span>{fmt(sumPerM2)} lei</span>
                      </div>
                    </div>
                  )}

                  <div className="nudge">
                    <p>
                      Alegând pachetul <strong>Tot inclus</strong> economisești{" "}
                      <strong className="savings-pct">{SAVINGS_PERCENT}%</strong> față de serviciile
                      luate separat.
                    </p>
                    <button
                      className="btn-primary"
                      type="button"
                      onClick={() => {
                        if (numArea <= 0) {
                          warnMissingArea();
                          return;
                        }
                        toggleAll();
                      }}
                    >
                      Alege tot inclus
                    </button>
                  </div>
                </div>
              )}

              <p className="res-note">
                * Preț estimativ. Costul final se stabilește după evaluarea gratuită la fața locului.
              </p>
              <button className="btn-ghost" type="button">
                Vezi materialele de lucru
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
