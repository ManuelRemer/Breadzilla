import "./NavButton.css";

export default function RecipeNavButton({
  label,
  route,
  size,
  onClick,
  action,
}) {
  function handleRoute(event) {
    console.log(label);
    event.preventDefault();
    console.log(label);
    onClick(route, label);
  }

  function handleSave(route, label) {
    onClick(route, label);
  }

  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button"].join(" ")}
      route={route}
      label={label}
      onClick={
        action === "route" ? handleRoute : action === "save" ? handleSave : null
      }
      action={action}
      size={size}
    >
      {label}
    </button>
  );
}
