import { useHistory } from "react-router-dom";
import "./DeleteButton.css";
export default function DeleteButton({ name, onDelete }) {
  let history = useHistory();
  function onClick() {
    onDelete(name, history);
  }
  //
  // function handleDelete(x) {
  //   if (window.confirm("Are yue sure?")) {
  //     history.push("/");

  //     const indexToDelete = savedRecipes.findIndex(
  //       (recipeToDelete) => recipeToDelete.recipe.name === name
  //     );

  //     savedRecipes.splice(indexToDelete);
  //     localStorage.setItem("recipes", JSON.stringify(savedRecipes));

  //     onDelete(savedRecipes);
  //   }
  // }

  return (
    <button onClick={onClick} className="DeleteButton">
      X
    </button>
  );
}
