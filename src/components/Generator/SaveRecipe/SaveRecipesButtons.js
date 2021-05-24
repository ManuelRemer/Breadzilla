import isAnyRecipeEqual from "../../../services/isAnyRecipeEqual";
import RecipeNavButton from "../../Buttons/NavButtons/RecipeNavButton";
import SaveButton from "../../Buttons/SaveButton";

export default function SaveRecipesButtons({
  alreadySaved,
  ingredientsList,
  handleRoute,
  handleSave,
  saveButtonClicked,
}) {
  if (isAnyRecipeEqual(alreadySaved, ingredientsList) && saveButtonClicked) {
    return (
      <RecipeNavButton
        size="xlarge"
        label={isAnyRecipeEqual(alreadySaved, ingredientsList).recipe.name}
        onClick={handleRoute}
        animation="true"
      />
    );
  } else {
    return (
      <SaveButton
        size="xlarge"
        label="save"
        onSave={handleSave}
        action="save"
      />
    );
  }
}
