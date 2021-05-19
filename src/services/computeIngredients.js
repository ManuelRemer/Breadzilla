export default function computeIngredients(flours) {
  const ingredients = flours.filter((flour) => flour.ratioValue > 0);

  const spelts = flours.filter((flour) => flour.name.includes("Spelt"));

  const ryes = flours.filter((flour) => flour.name.includes("Rye"));

  const amountLiquids = ingredients.reduce(liquidReducer, { ratioLiquids: 0 });

  const amountYeast = ingredients.reduce(yeastReducer, { ratioYeast: 0 });

  const totalRatioSpelts = spelts.reduce(flourRatioReducer, { ratioValue: 0 });

  const totalRatioRyes = ryes.reduce(flourRatioReducer, { ratioValue: 0 });

  const amountLemonJuice = ((6 * totalRatioSpelts.ratioValue) / 100) * 4;

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
  return {
    amountLiquids,
    amountYeast,
    totalRatioRyes,
    totalRatioSpelts,
    amountLemonJuice,
    ingredients,
  };
}
