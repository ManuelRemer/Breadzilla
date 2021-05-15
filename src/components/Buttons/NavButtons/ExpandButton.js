import "./NavButton.css";
export default function ExpandButton({
  label,
  className,
  onExpand,
  state,
  setState,
}) {
  function handleClick() {
    onExpand(setState, state);
  }

  return (
    <button className={className} onClick={handleClick}>
      {label}
    </button>
  );
}
