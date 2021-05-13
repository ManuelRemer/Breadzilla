import { useParams } from "react-router-dom";
export default function SingleRecipe({ savedRecipes }) {
  const { name } = useParams();
  const spezial = savedRecipes.find((recipe) => recipe.recipe.name === name);

  console.log(spezial);
  return <div>{name}</div>;
}
