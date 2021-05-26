import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
import RecipeIngredients from "../../RecipeIngredients/RecipeIngredients";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import isAnyRecipeEqual from "../../../services/isAnyRecipeEqual";
import SaveRecipesButtons from "./SaveRecipesButtons";
import getRecipesFromLocalStorage from "../../../services/getRecipeFromLocalStorage";
import addRecipeToLocalStorage from "../../../services/addRecipeToLocalStorage";
import FloursContext from "../../../CustomHooks/FloursContext";
import useNameRecipeInput from "../../../CustomHooks/useNameRecipeIput";

export default function SaveRecipe({ onSaveUpdateSavedRecipes, savedRecipes }) {
  let history = useHistory();
  const { totalRatioRyes, flours, clearGenerator } = useContext(FloursContext);
  const { ingredientsList, handleNameRecipeInput } = useNameRecipeInput();
  const [note, setNote] = useState("");
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);
  const anyNameEqual = savedRecipes.some(
    (savedRecipe) => savedRecipe.recipe.name === ingredientsList.name
  );

  function handleRoute() {
    history.push(
      `recipes/${isAnyRecipeEqual(savedRecipes, ingredientsList).recipe.name}`
    );
    clearGenerator();
  }

  function handleSave() {
    setSaveButtonClicked(!saveButtonClicked);
    if (isAnyRecipeEqual(savedRecipes, ingredientsList)) {
      setNote(
        `This recipe already exists, look at ${
          isAnyRecipeEqual(savedRecipes, ingredientsList).recipe.name
        }`
      );
    } else {
      if (anyNameEqual !== false) {
        setNote("This name is already used, please choose another one");
      } else {
        if (!ingredientsList.name) {
          setNote("Please name your recipe");
        } else if (
          !anyNameEqual &&
          !isAnyRecipeEqual(savedRecipes, ingredientsList)
        ) {
          addRecipeToLocalStorage({ recipe: ingredientsList });
          setNote("");
          // setAlreadySaved(getRecipesFromLocalStorage());
          onSaveUpdateSavedRecipes(getRecipesFromLocalStorage());
          history.push(`recipes/${ingredientsList.name}`);
          clearGenerator();
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
      <div className="SaveRecipe_Ingredients">
        <RecipeIngredients
          flours={flours}
          save={ingredientsList}
          totalRatioRyes={totalRatioRyes}
        />
      </div>

      <div className="save-recipe--buttons">
        <SaveRecipesButtons
          handleSave={handleSave}
          ingredientsList={ingredientsList}
          handleRoute={handleRoute}
          saveButtonClicked={saveButtonClicked}
          alreadySaved={savedRecipes}
        />
      </div>
    </div>
  );
}
