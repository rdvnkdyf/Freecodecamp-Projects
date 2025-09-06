function insertionSort(array) {
  // A copy of the original array to avoid modifying the input directly.
  const arr = [...array];
  const n = arr.length;

  // Outer loop to iterate through the array starting from the second element.
  for (let i = 1; i < n; i++) {
    // Store the current element to be inserted into the sorted part.
    const current = arr[i];
    let j = i - 1;

    // Inner loop to move elements of the sorted part that are greater than `current`
    // one position to the right.
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Place the `current` element in its correct sorted position.
    arr[j + 1] = current;
  }

  return arr;
}

// Example usage from the problem description:
console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
console.log(insertionSort([5, 4, 33, 2, 8])); // should return [2, 4, 5, 8, 33]