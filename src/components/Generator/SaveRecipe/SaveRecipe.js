import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
import SaveRecipeIngredients from "./SaveRecipeIngredients/SaveRecipeIngredients";
import { useState } from "react";
import {
  areArraysDeepEqual,
  getRecipesFromLocalStorage,
  addRecipeToLocalStorage,
} from "../../Generator/libGenerator";

export default function SaveRecipe({ flours, totalRatioRyes, onSave }) {
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

    if (!anyNameEqual && !anyRecipeEqual) {
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
  }

  return (
    <div className="save-recipe" id="ingredients">
      <div className="save-recipe-name">
        <SaveRecipeTextBox />
        <NameRecipeInput onChange={handleNameRecipeInput} />
        <p className="SaveRecipe_Note ">{note}</p>
      </div>
      <div>
        <SaveRecipeIngredients
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
