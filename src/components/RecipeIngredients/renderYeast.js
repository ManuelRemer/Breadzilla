import computeIngredients from "../../services/computeIngredients";
export default function renderYeast(flours) {
  const { amountYeast } = computeIngredients(flours);
  return (
    <div className="RecipeIngredients_Item">
      <p>{amountYeast.ratioYeast.toFixed(1)} g</p>
      <p>Yeast</p>
    </div>
  );
}
