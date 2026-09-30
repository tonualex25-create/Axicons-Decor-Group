# Axicons Decor Grup — site

Site-ul [axicons.md](https://axicons.md), făcut cu [Next.js](https://nextjs.org).

## Pornire

```bash
npm install
npm run dev
```

Site-ul se deschide la [http://localhost:3000](http://localhost:3000) și se actualizează singur când salvezi un fișier.

Înainte de publicare, verifică dacă totul se construiește fără erori:

```bash
npm run build
```

## Regula de organizare

- **Paginile** stau în `app/`. Numele folderului este adresa din browser.
- **Secțiunile** primei pagini stau în `components/sections/`.
- **Fiecare fișier CSS** stă lângă componenta lui, cu același nume.
- **Datele firmei** (telefon, email, adresă, rețele) sunt într-un singur loc: `lib/site.js`.

## Structura

```
axicons-decor/
│
├── app/                          ← PAGINILE (numele folderului = adresa din browser)
│   ├── page.js                   → axicons.md/                (prima pagină: pune secțiunile în ordine)
│   ├── layout.js                 → cadrul comun: font, header, footer, titlurile Google
│   ├── globals.css               → culori, lățimea wrap-ului, butoane (pentru tot site-ul)
│   │
│   ├── materiale/
│   │   ├── page.js + page.css    → /materiale
│   │   ├── termoizolare/page.js  → /materiale/termoizolare   (textele, prețul, întrebările)
│   │   ├── armare/page.js        → /materiale/armare
│   │   └── finisaj/page.js       → /materiale/finisaj
│   ├── despre-noi/
│   │   └── page.js + page.css    → /despre-noi
│   ├── confidentialitate/page.js → /confidentialitate
│   ├── termeni-si-conditii/page.js → /termeni-si-conditii
│   ├── not-found.js + .css       → pagina 404
│   │
│   ├── sitemap.js                → lista paginilor pentru Google  ← adaugi aici orice pagină nouă
│   ├── robots.js                 → reguli pentru Google
│   ├── manifest.js               → nume și iconițe pentru telefoane
│   └── icon.svg, apple-icon.png, favicon.ico, opengraph-image.jpg  → iconițe și poza pentru Facebook
│
├── components/                   ← BUCĂȚILE din care sunt făcute paginile
│   ├── layout/                   → ce apare pe TOATE paginile
│   │   ├── Header.js + .css      (meniul, logo, telefonul)
│   │   ├── Footer.js + .css
│   │   └── SectionLinks.js       (derularea lină și adresele curate, fără #)
│   │
│   ├── sections/                 → SECȚIUNILE primei pagini, în ordinea de pe site
│   │   ├── Hero.js + .css
│   │   ├── Calculator.js + .css  (prețurile pe m² sunt sus în fișier)
│   │   ├── Materials.js + .css   (folosit și pe /materiale)
│   │   ├── Benefits.js + .css
│   │   ├── Contact.js + .css     (formularul → Google Sheets)
│   │   ├── Faq.js + .css         (întrebările frecvente)
│   │   └── Works.js + .css       (portofoliu, pregătit dar nefolosit încă)
│   │
│   ├── templates/                → ȘABLOANE de pagină folosite de mai multe pagini
│   │   └── MaterialDetailPage.js + .css  (aspectul paginilor Termoizolare, Armare, Finisaj)
│   │
│   └── ui/                       → piese mici refolosite
│       ├── Logo.js
│       └── SocialLinks.js        (iconițele Facebook, Instagram, TikTok)
│
├── lib/
│   └── site.js                   ← DATELE FIRMEI: telefon, email, adresă, IDNO, rețele sociale
│
├── styles/
│   └── legal.css                 → aspectul comun pentru Confidențialitate și Termeni
│
└── public/                       ← FIȘIERE publice (poze, logo)
    ├── images/hero-axicons-v2.webp   (poza din hero)
    ├── images/materiale/...          (pozele materialelor)
    └── logo-icon.svg, logo-icon-light.svg
```

## Unde cauți când vrei să schimbi ceva

| Vreau să schimb… | Deschid… |
|---|---|
| telefonul, emailul, linkurile rețelelor | `lib/site.js` (se schimbă peste tot) |
| textul unei pagini de material | `app/materiale/<nume>/page.js` |
| o secțiune de pe prima pagină | `components/sections/<Nume>.js` și `.css` |
| ordinea secțiunilor pe prima pagină | `app/page.js` |
| meniul sau footer-ul | `components/layout/` |
| culorile, butoanele, lățimea paginii | `app/globals.css` |
| o pagină nouă | un folder nou în `app/`, plus o linie în `app/sitemap.js` |

## Poze

- Pozele materialelor se pun în `public/images/materiale/<categorie>/`, apoi se adaugă rândul `image: "..."` la materialul respectiv în pagina lui din `app/materiale/`.
- Un material fără `image` folosește temporar poza din hero.
- Când înlocuiești o poză cu una nouă, dă-i un **nume nou** (de exemplu `hero-axicons-v3.webp`), ca vizitatorii să nu vadă poza veche din cache.
