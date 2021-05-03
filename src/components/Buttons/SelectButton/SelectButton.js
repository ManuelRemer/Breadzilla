export default function SelectionButton({ label, onClick, style, size }) {
  function handleSelectionButton() {
    onClick(label);
  }

  return (
    <button
      type="button"
      className={[`select-button-${style}`, "button", `button--${size}`].join(
        " "
      )}
      onClick={handleSelectionButton}
    >
      {label}
    </button>
  );
}
