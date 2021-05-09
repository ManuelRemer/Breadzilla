import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
import SaveRecipeIngredients from "./SaveRecipeIngredients/SaveRecipeIngredients";
import { useState } from "react";
import { areArraysDeepEqual } from "../../../customHooks/customHooks";

export default function SaveRecipe({ flours }) {
  const [ingredientsList, setIngredientsList] = useState({
    name: "",
    ingredients: flours,
  });
  const [note, setNote] = useState("");

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
    // setSavedRecipesState(savedRecipes);

    const anyRecipeEqual = savedRecipes.find((savedRecipe) =>
      areArraysDeepEqual(
        savedRecipe.recipe.ingredients,
        ingredientsList.ingredients,
        "ratioValue"
      )
    );
    console.log(anyRecipeEqual);

    const anyNameEqual = savedRecipes.some(
      (savedRecipe) => savedRecipe.recipe.name === ingredientsList.name
    );

    if (anyNameEqual === false && !anyRecipeEqual) {
      addRecipeToLocalStorage({ recipe: ingredientsList });

      // setSavedRecipesState(savedRecipes);
    } else {
      if (anyNameEqual !== false) {
        setNote("This name is already used, please choose another one");
      } else {
        if (anyRecipeEqual !== false) {
          setNote(
            `This recipe already exists, look at ${anyRecipeEqual.recipe.name}`
          );
        }
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
    console.log(savedRecipes);
    return savedRecipes;
  }

  return (
    <div className="save-recipe" id="ingredients">
      <div className="save-recipe-name">
        <SaveRecipeTextBox />
        <NameRecipeInput onChange={handleNameRecipeInput} />
        <p>{note}</p>
      </div>
      <div className="save-recipe-ingredients">
        <SaveRecipeIngredients flours={flours} save={ingredientsList} />
      </div>

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
