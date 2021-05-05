import "./SaveRecipe.css";
import SaveRecipeTextBox from "../../StaticTextBoxes/GeneratorPage/SaveRecipe/SaveRecipeTextBox";
import NavButton from "../../Buttons/NavButtons/NavButton";
import NameRecipeInput from "./NameRecipeInput/NameRecipeInput";
import SaveRecipeIngredients from "./SaveRecipeIngredients/SaveRecipeIngredients";
import { useState } from "react";

export default function SaveRecipe({ flours }) {
  const [ingredientsList, setIngredientsList] = useState({ name: "" });
  console.log(ingredientsList);
  function handleNameRecipeInput(name) {
    const updateIngredientsList = {
      ...ingredientsList,
      name: `${name}`,
      flours: { flours },
    };
    setIngredientsList(updateIngredientsList);
  }
  // function handleClick() {
  //   localStorage.setItem("name", { mehl1: 70, mehl2: 30 });
  // }

  return (
    <div className="save-recipe" id="ingredients">
      <div className="save-recipe-name">
        <SaveRecipeTextBox />
        <NameRecipeInput onChange={handleNameRecipeInput} />
      </div>

      <SaveRecipeIngredients flours={flours} />

      <div className="save-recipe--buttons">
        <NavButton size="xlarge" label="lets bake" />
        <NavButton size="xlarge" label="save" />
      </div>
    </div>
  );
}
