import "./RecipeIngredients.css";
import computeIngredients from "../../services/computeIngredients";
import renderWater from "./renderWater";
import renderLemonJuice from "./renderLemonJuice";
import renderVinegar from "./renderVinegar";
import renderYeast from "./renderYeast";
import renderSalt from "./renderSalt";
export default function SaveRecipeIngredients({ flours, label }) {
  const { ingredients } = computeIngredients(flours);

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
        {renderWater(flours)}
        {renderLemonJuice(flours)}
        {renderVinegar(flours)}
        {renderYeast(flours)}
        {renderSalt(flours)}
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
