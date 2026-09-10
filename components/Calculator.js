"use client";

import { useState } from "react";
import "./components/Calculator.css";

const WORK_TYPES = [
  { label: "Finisaj exterior", price: 1000 },
  { label: " În curs de completare", price: 0 },
];

export default function Calculator() {
  const [area, setArea] = useState(1);
  const [price, setPrice] = useState(WORK_TYPES[0].price);

  const total = Math.max(0, Number(area) || 0) * price;
  const formattedTotal = new Intl.NumberFormat("ro-RO").format(Math.round(total));

  return (
    <section id="calculator" className="calculator">
      <div className="wrap">
        <div className="calc-head">
          <div>
            <p className="eyebrow">
              <span className="sheet-no">
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 0v4M6 8v4M0 6h4M8 6h4" />
                </svg>
                AXI—03
              </span>
              <span className="sep">/</span>
              Estimare cost
            </p>
            <h2>Calculează prețul</h2>
          </div>
          <p>
            Introdu suprafața fațadei și tipul lucrării pentru o estimare
            orientativă a costului de manoperă.
          </p>
        </div>

        <div className="calc-card">
          <div className="calc-form">
            <div className="field">
              <label htmlFor="calcArea">Suprafață fațadă</label>
              <div className="input-row">
                <input
                  type="number"
                  id="calcArea"
                  min="0"
                  max="9999999"
                  step="1"
                  inputMode="numeric"
                  value={area}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length > 7) return;
                    setArea(val === "" ? "" : Number(val));
                  }}
                />
                <span className="unit">M²</span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="calcType">Tip lucrare</label>
              <div className="input-row">
                <select
                  id="calcType"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                >
                  {WORK_TYPES.map((type) => (
                    <option key={type.label} value={type.price}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <span className="unit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>

            <p className="calc-note">
              * Preț estimativ, orientativ — util pentru o primă bugetare.
              Costul final se stabilește după evaluarea gratuită la fața locului.
            </p>
          </div>

          <div className="calc-result">
            <p className="calc-result-label">îN acest preț se include tot, manopera și materiale de lucru</p>
            <p className="calc-result-value">
              {formattedTotal}
              <span>LEI</span>
            </p>
            <div className="calc-breakdown">
              <div>
                <span>Suprafață</span>
                <span>{area} m²</span>
              </div>
              <div>
                <span>Preț / m²</span>
                <span>{price} lei</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}