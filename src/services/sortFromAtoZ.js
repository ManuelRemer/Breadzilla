export default function sortFromAtoZ(itemsToSort) {
  const sortedItems = itemsToSort.sort(function (firstValue, secondValue) {
    const nameA = firstValue.recipe.name.toUpperCase();
    const nameB = secondValue.recipe.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedItems;
}
