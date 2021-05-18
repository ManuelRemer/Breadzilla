import { useHistory } from "react-router-dom";
import "./DeleteButton.css";
export default function DeleteButton({ name, onDelete, savedRecipes }) {
  let history = useHistory();
  function handleDelete(x) {
    if (window.confirm("Are yue sure?")) {
      history.push("/");

      const indexToDelete = savedRecipes.findIndex(
        (recipeToDelete) => recipeToDelete.recipe.name === name
      );

      savedRecipes.splice(indexToDelete);
      localStorage.setItem("recipes", JSON.stringify(savedRecipes));

      onDelete(savedRecipes);
    }
  }

  return (
    <button onClick={handleDelete} className="DeleteButton">
      X
    </button>
  );
}
