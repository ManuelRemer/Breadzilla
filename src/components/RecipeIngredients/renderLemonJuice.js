import computeIngredients from "../../services/computeIngredients";

export default function renderLemonJuice(flours) {
  const { totalRatioSpelts, amountLemonJuice } = computeIngredients(flours);

  if (totalRatioSpelts.ratioValue > 30) {
    return (
      <div className="RecipeIngredients_Item">
        <p>{amountLemonJuice} g</p>
        <p>Lemon Juice</p>
      </div>
    );
  }
}
