import "./RecipeIngredients.css";
import service from "./RecipeIngredients_Service";
export default function SaveRecipeIngredients({ flours, label }) {
  const {
    totalRatioRyes,
    totalRatioSpelts,
    amountLemonJuice,
    amountLiquids,
    amountYeast,
    ingredients,
  } = service(flours);
  function renderLemonJuice() {
    if (totalRatioSpelts.ratioValue > 30) {
      return (
        <div className="RecipeIngredients_Item">
          <p>{amountLemonJuice} g</p>
          <p>Lemon Juice</p>
        </div>
      );
    }
  }
  function renderVinegar() {
    if (totalRatioRyes.ratioValue > 10) {
      return (
        <div className="RecipeIngredients_Item">
          <p>10 g</p>
          <p>Vinegar</p>
        </div>
      );
    }
  }
  function renderWater() {
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

  function renderYeast() {
    return (
      <div className="RecipeIngredients_Item">
        <p>{amountYeast.ratioYeast.toFixed(1)} g</p>
        <p>Yeast</p>
      </div>
    );
  }

  function renderSalt() {
    return (
      <div className="RecipeIngredients_Item">
        <p>{Math.round(((600 + amountLiquids.ratioLiquids) / 100) * 1.3)} g</p>
        <p>Salt</p>
      </div>
    );
  }

  function ingredientsFlours() {
    return ingredients.map((flour) => (
      <div key={flour.name} className="RecipeIngredients_Item">
        <p>{Math.round((600 / 100) * flour.ratioValue)} g</p>
        <p>{flour.name}</p>
      </div>
    ));
  }
  function ingredientsOthers() {
    return (
      <div>
        {renderWater()}
        {renderLemonJuice()}
        {renderVinegar()}
        {renderYeast()}
        {renderSalt()}
      </div>
    );
  }
  return (
    <section className="RecipeIngredients">
      {label && <h3>{label}</h3>}
      <div className="RecipeIngredients_List">
        {ingredientsFlours()}
        {ingredientsOthers()}
      </div>
    </section>
  );
}
