export default function SaveRecipeIngredients({ flours }) {
  const ingredients = flours.filter((flour) => flour.ratioValue > 0);

  const amountLiquids = ingredients.reduce(liquidReducer, { ratioLiquids: 0 });

  function liquidReducer(totlaLiquid, currentLiquid) {
    return {
      ratioLiquids: totlaLiquid.ratioLiquids + currentLiquid.ratioLiquids,
    };
  }

  function ingredientsFlours() {
    return ingredients.map((flour) => (
      <div key={flour.name}>
        <p>{(600 / 100) * flour.ratioValue} g</p>
        <p>{flour.name}</p>
      </div>
    ));
  }
  function Liquids() {
    return (
      <div>
        <p>{amountLiquids.ratioLiquids} g</p>
        <p>Wasser</p>
      </div>
    );
  }
  return (
    <section className="save-recipe-ingredients">
      <h3>All you need is:</h3>
      <div>
        {ingredientsFlours()}
        {Liquids()}
      </div>
    </section>
  );
}
