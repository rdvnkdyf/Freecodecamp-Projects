function quickSort(array) {
  // Base case: if the array has 0 or 1 elements, it's already sorted.
  if (array.length <= 1) {
    return array;
  }

  // Choose a pivot. For simplicity, we'll use the last element.
  const pivot = array[array.length - 1];
  const left = []; // Array for elements less than the pivot.
  const right = []; // Array for elements greater than or equal to the pivot.

  // Partition the array into two sub-arrays.
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // Recursively sort the sub-arrays and combine them with the pivot.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage from the problem description:
console.log(quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));