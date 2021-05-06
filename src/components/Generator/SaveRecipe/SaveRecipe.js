import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
import SaveRecipeIngredients from "./SaveRecipeIngredients/SaveRecipeIngredients";
import { useState } from "react";

export default function SaveRecipe({ flours }) {
  const [ingredientsList, setIngredientsList] = useState({
    name: "",
    ingredients: flours,
  });
  const [savedRecipesState, setSavedRecipesState] = useState([]);
  console.log(savedRecipesState);
  function handleNameRecipeInput(name) {
    const updateIngredientsList = {
      ...ingredientsList,
      name: name,
    };

    setIngredientsList(updateIngredientsList);
    console.log(ingredientsList);
  }

  function handleSave() {
    const savedRecipes = getRecipesFromLocalStorage();
    setSavedRecipesState(savedRecipes);
    console.log(savedRecipesState);
    const filterdSavedRecipesName = savedRecipesState.filter(
      (recipe) => recipe.name === ingredientsList.name
    );
    console.log(filterdSavedRecipesName);

    // const anyRecipeEqual = savedRecipesState.some(
    //   floursEqual(savedRecipesState.recipe.flours, ingredientsList.recipe)
    // );

    function floursEqual(obj1, obj2) {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      if (keys1.length !== keys2.lengt) {
        return false;
      }
      keys1.forEach((key) => {
        if (obj1.key !== obj2.key) {
          return false;
        }
      });
      return true;
    }

    if (filterdSavedRecipesName.length === 0) {
      addRecipeToLocalStorage({ recipe: ingredientsList });

      setSavedRecipesState(savedRecipes);
    } else {
      if (filterdSavedRecipesName.length !== 0) {
        alert("Choose another name");
      }
    }
  }

  function addRecipeToLocalStorage(recipe) {
    const savedRecipes = getRecipesFromLocalStorage();
    savedRecipes.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(savedRecipes));
  }
  function getRecipesFromLocalStorage() {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    return savedRecipes;
  }

  return (
    <div className="save-recipe" id="ingredients">
      <div className="save-recipe-name">
        <SaveRecipeTextBox />
        <NameRecipeInput onChange={handleNameRecipeInput} />
      </div>

      <SaveRecipeIngredients flours={flours} save={ingredientsList} />

      <div className="save-recipe--buttons">
        <NavButton size="xlarge" label="lets bake" />
        <NavButton
          size="xlarge"
          label="save"
          onClick={handleSave}
          action="save"
        />
      </div>
    </div>
  );
}
