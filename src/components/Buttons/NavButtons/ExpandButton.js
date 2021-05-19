import "./NavButton.css";
export default function ExpandButton({ onClick, className, label }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
