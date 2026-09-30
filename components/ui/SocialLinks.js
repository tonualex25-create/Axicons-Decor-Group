import { SOCIALS } from "@/lib/site";

const ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.2-1.5 1.6-1.5h1.6V3.7C15.9 3.6 15 3.5 14 3.5c-2.4 0-4 1.5-4 4.1v2.3H7.3V13H10v8z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 3c.3 2.2 1.6 3.7 3.9 3.9v3.1c-1.4.1-2.7-.3-3.9-1.1v5.9c0 3.4-2.4 5.7-5.6 5.7-3.1 0-5.5-2.5-5.5-5.5 0-3.4 3-5.9 6.5-5.3v3.2c-1.6-.4-3.3.6-3.3 2.2 0 1.3 1 2.3 2.3 2.3 1.4 0 2.4-1 2.4-2.6V3z" />
    </svg>
  ),
};

export default function SocialLinks({ className = "social-links" }) {
  return (
    <ul className={className}>
      {SOCIALS.map((s) => (
        <li key={s.key}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Axicons pe ${s.label}`}>
            {ICONS[s.key]}
          </a>
        </li>
      ))}
    </ul>
  );
}
