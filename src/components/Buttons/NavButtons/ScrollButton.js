import "./NavButton.css";

export default function ScrollButton({ label, size }) {
  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button"].join(" ")}
      label={label}
    >
      {label}
    </button>
  );
}
