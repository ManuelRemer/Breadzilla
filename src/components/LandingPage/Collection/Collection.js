import "./Collection.css";
import { useHistory } from "react-router-dom";
import RecipeNavButton from "../../Buttons/NavButtons/RecipeNavButton";
import sortFromAtoZ from "../../../services/sortFromAtoZ";

export default function Collection({ savedRecipes, onRecipe }) {
  let history = useHistory();
  function handleRoute(label) {
    history.push(`recipes/${label}`);
  }
  return (
    <div className="Collection" id="Collection">
      <h2 className="Collection_Headline">
        Your <span>&nbsp;Bredzillas</span>
      </h2>
      <div className="Collection_SavedRecipes">
        {sortFromAtoZ(savedRecipes).map((savedRecipe) => (
          <RecipeNavButton
            label={savedRecipe.recipe.name}
            route="/recipes"
            onRecipe={onRecipe}
            onClick={handleRoute}
            action="route"
            size="xlarge"
          />
        ))}
      </div>
    </div>
  );
}
