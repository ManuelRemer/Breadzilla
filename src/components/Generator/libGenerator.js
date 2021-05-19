export function flourRatioReducer(a, b) {
  return {
    ratioValue: a.ratioValue + b.ratioValue,
  };
}
export function areArraysDeepEqual(arr1, arr2, key1) {
  const resultEvery = arr1.every((arr1Item, index) => {
    const arr2Item = arr2[index];
    return arr1Item[key1] === arr2Item[key1];
  });

  return resultEvery;
}

export function addRecipeToLocalStorage(recipe) {
  const savedRecipes = getRecipesFromLocalStorage();
  savedRecipes.push(recipe);
  localStorage.setItem("recipes", JSON.stringify(savedRecipes));
}

export function getRecipesFromLocalStorage() {
  return JSON.parse(localStorage.getItem("recipes")) || [];
}
