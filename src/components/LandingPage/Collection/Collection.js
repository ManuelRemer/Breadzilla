import "./Collection.css";
import NavButton from "../../Buttons/NavButtons/NavButton";
import sortFromAtoZ from "../../../services/sortFromAtoZ";

export default function Collection({ savedRecipes, onRecipe }) {
  return (
    <div className="Collection" id="Collection">
      <h2 className="Collection_Headline">
        Your <span>&nbsp;Bredzillas</span>
      </h2>
      <div className="Collection_SavedRecipes">
        {sortFromAtoZ(savedRecipes).map((savedRecipe) => (
          <NavButton
            label={savedRecipe.recipe.name}
            route={`recipes/${savedRecipe.recipe.name}`}
            onRecipe={onRecipe}
            size="xlarge"
          />
        ))}
      </div>
    </div>
  );
}
