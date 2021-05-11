import "./NavButton.css";

export default function ScrollButton({ label, route, size }) {
  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button"].join(" ")}
      route={route}
      label={label}
    >
      {label}
    </button>
  );
}
