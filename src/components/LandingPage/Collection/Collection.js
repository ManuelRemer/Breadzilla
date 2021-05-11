import "./Collection.css";
import NavButton from "../../Buttons/NavButtons/NavButton";
export default function Collection({ savedRecipes }) {
  return (
    <div className="Collection">
      <h2 className="Collection_Headline">
        Your <span>&nbsp;Bredzillas</span>
      </h2>{" "}
      <div className="Collection_SavedRecipes">
        {savedRecipes.map((savedRecipe) => (
          <NavButton label={savedRecipe.recipe.name} />
        ))}
      </div>
    </div>
  );
}
