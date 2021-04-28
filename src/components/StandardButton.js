import "./StandardButton.css";
import { useHistory } from "react-router-dom";
export default function StandardButton({ name, route }) {
  let history = useHistory();
  function handleClick() {
    history.push(`${route}`);
  }
  return (
    <button type="button" onClick={handleClick} className="standard-button">
      {name}
    </button>
  );
}
