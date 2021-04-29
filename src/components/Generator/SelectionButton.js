import "./SelectionButton.css";
export default function SelectionButton({ name, onClick, style }) {
  function handleSelectionButton(event) {
    onClick(event.target.name);
  }

  return (
    <button
      type="button"
      className={style}
      onClick={handleSelectionButton}
      name={name}
    >
      {name}
    </button>
  );
}
