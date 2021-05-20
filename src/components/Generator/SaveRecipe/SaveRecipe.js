import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import RecipeNavButton from "../../Buttons/NavButtons/RecipeNavButton";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
import RecipeIngredients from "../../RecipeIngredients/RecipeIngredients";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import areArraysDeepEqual from "../../../services/areArraysDeepEqual";
import getRecipesFromLocalStorage from "../../../services/getRecipeFromLocalStorage";
import addRecipeToLocalStorage from "../../../services/addRecipeToLocalStorage";

export default function SaveRecipe({ flours, totalRatioRyes, onSave }) {
  let history = useHistory();
  const [savedButtonClicked, setSavedButtonClicked] = useState(false);
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
  const savedRecipes = getRecipesFromLocalStorage();

  const anyRecipeEqual = savedRecipes.find((savedRecipe) =>
    areArraysDeepEqual(
      savedRecipe.recipe.ingredients,
      ingredientsList.ingredients,
      "ratioValue"
    )
  );

  function handleSave() {
    setSavedButtonClicked(!savedButtonClicked);
    const anyNameEqual = savedRecipes.some(
      (savedRecipe) => savedRecipe.recipe.name === ingredientsList.name
    );

    if (anyRecipeEqual) {
      setNote(
        `This recipe already exists, look at ${anyRecipeEqual.recipe.name}`
      );
    } else {
      if (anyNameEqual !== false) {
        setNote("This name is already used, please choose another one");
      } else {
        if (!ingredientsList.name) {
          setNote("Please name your recipe");
        } else if (!anyNameEqual && !anyRecipeEqual) {
          addRecipeToLocalStorage({ recipe: ingredientsList });
          setNote("");
          onSave(getRecipesFromLocalStorage);
          history.push(`recipes/${ingredientsList.name}`);
        }
      }
    }
  }

  function handleRoute() {
    history.push(`recipes/${anyRecipeEqual.recipe.name}`);
  }

  function renderButtons() {
    if (anyRecipeEqual && savedButtonClicked) {
      return (
        <RecipeNavButton
          size="xlarge"
          label={anyRecipeEqual.recipe.name}
          onClick={handleRoute}
          animation="true"
        />
      );
    } else {
      return (
        <NavButton
          size="xlarge"
          label="save"
          onClick={handleSave}
          action="save"
        />
      );
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

      <div className="save-recipe--buttons">{renderButtons()}</div>
    </div>
  );
}
