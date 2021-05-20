import { useHistory } from "react-router-dom";
import "./DeleteButton.css";
import Basket from "../../SingleRecipe/basket";
export default function DeleteButton({ name, onDelete }) {
  let history = useHistory();
  function onClick() {
    onDelete(name, history);
  }

  return (
    <button onClick={onClick} className="DeleteButton">
      <Basket />
    </button>
  );
}
