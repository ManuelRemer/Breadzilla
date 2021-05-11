export function areArraysDeepEqual(arr1, arr2, key1) {
  const resultEvery = arr1.every((arr1Item, index) => {
    const arr2Item = arr2[index];
    return arr1Item[key1] === arr2Item[key1];
  });

  return resultEvery;
}
