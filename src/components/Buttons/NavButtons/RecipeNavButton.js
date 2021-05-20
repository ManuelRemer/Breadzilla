import "./NavButton.css";

export default function RecipeNavButton({
  label,
  route,
  size,
  onClick,
  animation,
}) {
  function handleRoute() {
    onClick(label);
  }
  const mode = animation ? "wobble" : null;

  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button", mode].join(
        " "
      )}
      route={route}
      label={label}
      onClick={handleRoute}
      size={size}
    >
      {label}
    </button>
  );
}
