import computeIngredients from "../../services/computeIngredients";
export default function renderWater(flours) {
  const {
    totalRatioRyes,
    totalRatioSpelts,
    amountLemonJuice,
    amountLiquids,
  } = computeIngredients(flours);

  if (totalRatioSpelts.ratioValue > 30 && totalRatioRyes.ratioValue > 10) {
    return (
      <div className="RecipeIngredients_Item">
        <p>
          {Math.round(amountLiquids.ratioLiquids - amountLemonJuice) - 10} g
        </p>
        <p>Water</p>
      </div>
    );
  } else if (totalRatioSpelts.ratioValue > 30) {
    return (
      <div className="RecipeIngredients_Item">
        <p>{Math.round(amountLiquids.ratioLiquids - amountLemonJuice)} g</p>
        <p>Water</p>
      </div>
    );
  } else if (totalRatioRyes.ratioValue > 10) {
    return (
      <div className="RecipeIngredients_Item">
        <p>{Math.round(amountLiquids.ratioLiquids - 10)} g</p>
        <p>Water</p>
      </div>
    );
  } else {
    return (
      <div className="RecipeIngredients_Item">
        <p>{Math.round(amountLiquids.ratioLiquids)} g</p>
        <p>Water</p>
      </div>
    );
  }
}
