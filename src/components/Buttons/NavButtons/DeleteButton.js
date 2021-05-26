import "./DeleteButton.css";
import Basket from "../../SingleRecipe/basket";
export default function DeleteButton({ onClick }) {
  // let history = useHistory();
  function onClicks() {
    onClick();
  }

  return (
    <button onClick={onClicks} className="DeleteButton">
      {<Basket />}
    </button>
  );
}
