export default function getRecipesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("recipes")) || [];
}
