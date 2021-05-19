import "./NavButton.css";

export default function RecipeNavButton({ label, route, size, onClick }) {
  function handleRoute() {
    onClick(label);
  }

  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button"].join(" ")}
      route={route}
      label={label}
      onClick={handleRoute}
      size={size}
    >
      {label}
    </button>
  );
}
