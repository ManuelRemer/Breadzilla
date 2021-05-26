import { useHistory } from "react-router";
import "./DeleteRecipePopUp.css";
export default function DeleteRecipePopUp({ onDelete, name, onClick }) {
  let history = useHistory();

  function onClickY() {
    onDelete(name, history);
  }
  function onClickX() {
    onClick(history);
  }

  return (
    <div className="DeleteRecipePopUp">
      <p>Do you really want to delete this recipe?</p>
      <button onClick={onClickX}>No</button>
      <button onClick={onClickY}>Yes</button>
    </div>
  );
}
