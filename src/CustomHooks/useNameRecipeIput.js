import { useContext, useState } from "react";
import FloursContext from "./FloursContext";

export default function useNameRecipeInput() {
  const { flours } = useContext(FloursContext);
  const [ingredientsList, setIngredientsList] = useState({
    name: "",
    ingredients: flours,
  });

  function handleNameRecipeInput(name) {
    const updateIngredientsList = {
      ...ingredientsList,
      name: name,
    };
    setIngredientsList(updateIngredientsList);
  }

  return { handleNameRecipeInput, ingredientsList };
}
