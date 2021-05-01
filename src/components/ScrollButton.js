import "./ScrollButton.css";

export default function ScrollButton({ name, look }) {
  return (
    <button type="button" className={look}>
      {name}
    </button>
  );
}
