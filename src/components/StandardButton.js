import "./StandardButton.css";
export default function StandardButton({ name, look }) {
  return <div className={look}>{name}</div>;
}
