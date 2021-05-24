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

export default function SaveRecipe({ onSaveUpdateSavedRecipes }) {
  const { totalRatioRyes, flours, clearGenerator } = useContext(FloursContext);
  let history = useHistory();

  const [alreadySaved, setAlreadySaved] = useState(
    getRecipesFromLocalStorage()
  );
  const [note, setNote] = useState("");
  const [saveButtonClicked, setSaveButtonClicked] = useState(false);
  const [ingredientsList, setIngredientsList] = useState({
    name: "",
    ingredients: flours,
  });
  const anyNameEqual = alreadySaved.some(
    (savedRecipe) => savedRecipe.recipe.name === ingredientsList.name
  );

  function handleNameRecipeInput(name) {
    const updateIngredientsList = {
      ...ingredientsList,
      name: name,
    };
    setIngredientsList(updateIngredientsList);
  }

  function handleRoute() {
    history.push(
      `recipes/${isAnyRecipeEqual(alreadySaved, ingredientsList).recipe.name}`
    );
    clearGenerator();
  }

  function handleSave() {
    setSaveButtonClicked(!saveButtonClicked);
    if (isAnyRecipeEqual(alreadySaved, ingredientsList)) {
      setNote(
        `This recipe already exists, look at ${
          isAnyRecipeEqual(alreadySaved, ingredientsList).recipe.name
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
          !isAnyRecipeEqual(alreadySaved, ingredientsList)
        ) {
          addRecipeToLocalStorage({ recipe: ingredientsList });
          setNote("");
          setAlreadySaved(getRecipesFromLocalStorage());
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
          alreadySaved={alreadySaved}
        />
      </div>
    </div>
  );
}
