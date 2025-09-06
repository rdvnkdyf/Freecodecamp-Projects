function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and push the smaller one into the result array.
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements from either array.
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

/**
 * Sorts an array of integers using the Merge Sort algorithm.
 * @param {Array<number>} array - The unsorted array of integers.
 * @returns {Array<number>} The sorted array.
 */
function mergeSort(array) {
  // Base case: if the array has 0 or 1 elements, it is already sorted.
  if (array.length <= 1) {
    return array;
  }

  // Find the middle point to divide the array into two halves.
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort the two halves and then merge them.
  return merge(mergeSort(left), mergeSort(right));
}

// Example usage from the problem description:
console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));