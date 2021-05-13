import "./Collection.css";
import { useHistory } from "react-router-dom";
import RecipeNavButton from "../../Buttons/NavButtons/RecipeNavButton";

export default function Collection({ savedRecipes, onRecipe }) {
  let history = useHistory();
  function handleRoute(x, y) {
    history.push(`${x}/${y}`);
  }
  return (
    <div className="Collection" id="Collection">
      <h2 className="Collection_Headline">
        Your <span>&nbsp;Bredzillas</span>
      </h2>
      <div className="Collection_SavedRecipes">
        {savedRecipes
          .sort(function (firstValue, secondValue) {
            const nameA = firstValue.recipe.name.toUpperCase();
            const nameB = secondValue.recipe.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          })
          .map((savedRecipe) => (
            <RecipeNavButton
              label={savedRecipe.recipe.name}
              route="/SingleRecipe"
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
