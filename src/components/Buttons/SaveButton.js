import "../Buttons/NavButtons/NavButton.css";
export default function SaveButton({ label, route, size, onSave }) {
  function handleClick() {
    onSave();
  }

  return (
    <button
      type="button"
      className={["button", `button--${size}`, "routing-button"].join(" ")}
      route={route}
      label={label}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
