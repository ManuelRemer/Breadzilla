import "./RoutingButton.css";
import { useHistory } from "react-router-dom";
export default function RoutingButton({ name, route, look }) {
  let history = useHistory();
  function handleClick() {
    history.push(`${route}`);
  }
  return (
    <button type="button" onClick={handleClick} className={look}>
      {name}
    </button>
  );
}
