export function areArraysDeepEqual(arr1, arr2, key1, key2) {
  const resultEvery = arr1.every((arr1Item, index) => {
    const arr2Item = arr2[index];
    console.log(key1);
    return arr1Item[key1] === arr2Item[key1];
  });
  console.log(arr1);
  console.log(arr2);
  return resultEvery;
}
