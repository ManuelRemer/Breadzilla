import areArraysDeepEqual from "../services/areArraysDeepEqual";
export default function isAnyRecipeEqual(alreadySaved, shouldBeSaved) {
  const anyRecipeEqual = alreadySaved.find((savedRecipe) =>
    areArraysDeepEqual(
      savedRecipe.recipe.ingredients,
      shouldBeSaved.ingredients,
      "ratioValue"
    )
  );
  return anyRecipeEqual;
}
