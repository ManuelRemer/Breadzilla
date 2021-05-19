import computeIngredients from "../../services/computeIngredients";

export default function renderVinegar(flours) {
  const { totalRatioRyes } = computeIngredients(flours);
  if (totalRatioRyes.ratioValue > 10) {
    return (
      <div className="RecipeIngredients_Item">
        <p>10 g</p>
        <p>Vinegar</p>
      </div>
    );
  }
}
