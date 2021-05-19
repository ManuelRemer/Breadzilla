import computeIngredients from "../../services/computeIngredients";
export default function renderSalt(flours) {
  const { amountLiquids } = computeIngredients(flours);
  return (
    <div className="RecipeIngredients_Item">
      <p>{Math.round(((600 + amountLiquids.ratioLiquids) / 100) * 1.3)} g</p>
      <p>Salt</p>
    </div>
  );
}
