function selectionSort(array) {
  // A copy of the original array to avoid modifying the input directly.
  const arr = [...array];
  const n = arr.length;

  // Outer loop to iterate through the array up to the second to last element.
  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the minimum.
    let minIndex = i;

    // Inner loop to find the index of the minimum element in the unsorted part.
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // If the minimum element is not the current element, swap them.
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage from the problem description:
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));