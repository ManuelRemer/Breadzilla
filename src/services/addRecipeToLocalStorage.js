import getRecipesFromLocalStorage from "./getRecipeFromLocalStorage";
export default function addRecipeToLocalStorage(recipe) {
  const savedRecipes = getRecipesFromLocalStorage();
  savedRecipes.push(recipe);
  localStorage.setItem("recipes", JSON.stringify(savedRecipes));
}
