import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
import RecipeIngredients from "../../RecipeIngredients/RecipeIngredients";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  areArraysDeepEqual,
  getRecipesFromLocalStorage,
  addRecipeToLocalStorage,
} from "../../Generator/libGenerator";

export default function SaveRecipe({ flours, totalRatioRyes, onSave }) {
  let history = useHistory();
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
  }

  function handleSave() {
    const savedRecipes = getRecipesFromLocalStorage();

    const anyRecipeEqual = savedRecipes.find((savedRecipe) =>
      areArraysDeepEqual(
        savedRecipe.recipe.ingredients,
        ingredientsList.ingredients,
        "ratioValue"
      )
    );

    const anyNameEqual = savedRecipes.some(
      (savedRecipe) => savedRecipe.recipe.name === ingredientsList.name
    );
    if (!ingredientsList.name) {
      setNote("Please name your recipe");
    } else if (!anyNameEqual && !anyRecipeEqual) {
      addRecipeToLocalStorage({ recipe: ingredientsList });
      setNote("");
      onSave(getRecipesFromLocalStorage);
    } else {
      if (anyRecipeEqual) {
        setNote(
          `This recipe already exists, look at ${anyRecipeEqual.recipe.name}`
        );
      } else {
        if (anyNameEqual !== false) {
          setNote("This name is already used, please choose another one");
        }
      }
    }

    history.push(`recipes/${ingredientsList.name}`);
  }

  return (
    <div className="save-recipe" id="ingredients">
      <div className="save-recipe-name">
        <SaveRecipeTextBox />
        <NameRecipeInput onChange={handleNameRecipeInput} />
        <p className="SaveRecipe_Note ">{note}</p>
      </div>
      <div>
        <RecipeIngredients
          flours={flours}
          save={ingredientsList}
          totalRatioRyes={totalRatioRyes}
        />
      </div>

      <div className="save-recipe--buttons">
        {/* <NavButton size="xlarge" label="lets bake" /> */}
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
