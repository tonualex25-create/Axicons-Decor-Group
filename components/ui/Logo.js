export default function Logo({ light = false }) {
  return (
    <img
      src={light ? "/logo-icon-light.svg" : "/logo-icon.svg"}
      alt="Axicons Decor Grup"
      className="brand-mark"
      width={48}
      height={34}
    />
  );
}
