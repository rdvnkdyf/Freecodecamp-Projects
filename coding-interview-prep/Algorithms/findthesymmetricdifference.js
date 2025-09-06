function getSymmetricDifference(arr1, arr2) {
  // Create Sets from the arrays for efficient checking of elements.
  // Using Set also automatically handles duplicates within each input array.
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  // Iterate over elements in the first set. If an element is not in the second set,
  // it is part of the symmetric difference.
  for (const item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }

  // Iterate over elements in the second set. If an element is not in the first set,
  // it is also part of the symmetric difference.
  for (const item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }

  return result;
}

/**
 * Finds the symmetric difference of two or more arrays.
 * @param {...Array<number>} args - A variable number of arrays.
 * @returns {Array<number>} An array containing the symmetric difference of all input arrays.
 */
function sym(...args) {
  // Use the reduce method to iteratively calculate the symmetric difference.
  // The initial accumulator is the first array, and the `getSymmetricDifference`
  // function is applied to the accumulator and the next array in the list.
  return args.reduce(getSymmetricDifference);
}

