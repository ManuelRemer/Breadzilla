import SaveRecipeIngredients from "../Generator/SaveRecipe/SaveRecipeIngredients/SaveRecipeIngredients";
import { useParams } from "react-router-dom";
export default function SingleRecipe({ savedRecipes }) {
  const { name } = useParams();
  const { recipe } = savedRecipes.find((recipe) => recipe.recipe.name === name);
  const { ingredients } = recipe;

  const steps = [
    "All ingredients are at room temperature. Measure everything exactly.",
    `Boil ${"x"} g of water and stir in ${"x"} g of the spelt flour with a whisk. Allow the mixture to cool for at least one hour.`,
    [
      "Disolve the yeast in 20 g of of the water, the salt in the remaining water.",
      "Disolve the yeast in 20 g of of the water.",
    ],
    [
      "Pour the salt water into a large bowl. Add the flours. Add the yeast water last.",
      "Pour the salt water and vinegar into a large bowl. Add the flours. Add the yeast water last.",
      "Pour the water and lemon juice into a large bowl. Add flours, and roux. Add the yeast water last.",
      "Pour the water lemon juice and vinegar into a large bowl. Add flours, and roux. Add the yeast water last.",
    ],
    "Mix everything by hand to a homogenous mass. This may take some time.The dough rests for 24 hours at room temperature.",
    "In the meantime, stretch and fold it every 8 hours. If you have time or just want to, do this more often. It'll strengthen the doughs structure. But give it time to relax, at least two ours between each stretching and folldering.",
    "After 24 hours of resting the dough should have doubled in volume. Now it's ready to get kneaded round. Flour your working surface and hands. Take the dough out of its bowl. It might be sticky and soft. If you have one, use a wet dough scraper for this. Grasp a part of the dough, similar to stretching and folding it. Stretch it, but gently and fold it just to the top center. Go ahead round the dough until you've stretched every part once. The goal is to tighten the doughs outer skin.",
    "The dough now matures for one hour in a floured proofing basket or in a bowl lined with a cloth, top down. In the meantime, preheat the oven to 250 °C and a cast-iron pot withit.",
    "After that drop the dough into the hot pot with the bottom facing up. Bake it in the closed pot at 230 °C for 45 min. The lid can be removed 10 minutes before the end to get a crispier crust.",
  ];

  return (
    <div>
      <h2>{name}</h2>
      <SaveRecipeIngredients flours={ingredients} />
      <div>
        <p>
          The dough now matures for one hour in a floured proofing basket or in
          a bowl lined with a cloth, top down.
        </p>
        <p>
          In the meantime, preheat the oven to 250 °C and a cast-iron pot with
          it.
        </p>
        <p>
          After that drop the dough into the hot pot with the bottom facing up.
          Bake it in the closed pot at 230 °C for 45 min. The lid can be removed
          10 minutes before the end to get a crispier crust.
        </p>
      </div>
    </div>
  );
}
