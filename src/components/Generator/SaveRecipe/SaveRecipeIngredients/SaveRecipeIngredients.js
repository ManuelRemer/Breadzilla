export default function SaveRecipeIngredients({ flours, totalRatioRyes }) {
  const ingredients = flours.filter((flour) => flour.ratioValue > 0);
  const spelts = flours.filter((flour) => flour.name.includes("Spelt"));
  // const ryes = flours.filter((flour) => flour.name.includes("Rye"));

  const amountLiquids = ingredients.reduce(liquidReducer, { ratioLiquids: 0 });

  const amountYeast = ingredients.reduce(yeastReducer, { ratioYeast: 0 });

  const totalRatioSpelts = spelts.reduce(flourRatioReducer, { ratioValue: 0 });
  // const totalRatioRyes = ryes.reduce(flourRatioReducer, { ratioValue: 0 });

  const lemonJuiceAmount = ((6 * totalRatioSpelts.ratioValue) / 100) * 4;

  function liquidReducer(totlaLiquid, currentLiquid) {
    return {
      ratioLiquids: totlaLiquid.ratioLiquids + currentLiquid.ratioLiquids,
    };
  }
  function yeastReducer(totalYeast, currentYeast) {
    return {
      ratioYeast: totalYeast.ratioYeast + currentYeast.ratioYeast,
    };
  }
  function flourRatioReducer(a, b) {
    return {
      ratioValue: a.ratioValue + b.ratioValue,
    };
  }
  function lemonJuice() {
    if (totalRatioSpelts.ratioValue > 30) {
      return (
        <div className="SaveRecipe_Ingredients_Item">
          <p>{lemonJuiceAmount} g</p>
          <p>Lemon Juice</p>
        </div>
      );
    }
  }
  function vinegar() {
    if (totalRatioRyes.ratioValue > 10) {
      return (
        <div className="SaveRecipe_Ingredients_Item">
          <p>10 g</p>
          <p>Vinegar</p>
        </div>
      );
    }
  }
  function water() {
    if (totalRatioSpelts.ratioValue > 30 && totalRatioRyes.ratioValue > 10) {
      return (
        <div className="SaveRecipe_Ingredients_Item">
          <p>
            {Math.round(amountLiquids.ratioLiquids - lemonJuiceAmount) - 10} g
          </p>
          <p>Water</p>
        </div>
      );
    } else if (totalRatioSpelts.ratioValue > 30) {
      return (
        <div className="SaveRecipe_Ingredients_Item">
          <p>{Math.round(amountLiquids.ratioLiquids - lemonJuiceAmount)} g</p>
          <p>Water</p>
        </div>
      );
    } else if (totalRatioRyes.ratioValue > 10) {
      return (
        <div className="SaveRecipe_Ingredients_Item">
          <p>{Math.round(amountLiquids.ratioLiquids - 10)} g</p>
          <p>Water</p>
        </div>
      );
    } else {
      return (
        <div className="SaveRecipe_Ingredients_Item">
          <p>{Math.round(amountLiquids.ratioLiquids)} g</p>
          <p>Water</p>
        </div>
      );
    }
  }

  function renderYeast() {
    return (
      <div className="SaveRecipe_Ingredients_Item">
        <p>{amountYeast.ratioYeast.toFixed(1)} g</p>
        <p>Yeast</p>
      </div>
    );
  }

  function renderSalt() {
    return (
      <div className="SaveRecipe_Ingredients_Item">
        <p>{Math.round(((600 + amountLiquids.ratioLiquids) / 100) * 1.3)} g</p>
        <p>Salt</p>
      </div>
    );
  }

  function ingredientsFlours() {
    return ingredients.map((flour) => (
      <div key={flour.name} className="SaveRecipe_Ingredients_Item">
        <p>{Math.round((600 / 100) * flour.ratioValue)} g</p>
        <p>{flour.name}</p>
      </div>
    ));
  }
  function ingredientsOthers() {
    return (
      <div>
        {water()}
        {lemonJuice()}
        {vinegar()}
        {renderYeast()}
        {renderSalt()}
      </div>
    );
  }
  return (
    <section className="save-recipe-ingredients">
      <h3>All you need is:</h3>
      <div>
        {ingredientsFlours()}
        {ingredientsOthers()}
      </div>
    </section>
  );
}
