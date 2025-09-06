function bubbleSort(array) {
  // A copy of the original array to avoid modifying the input directly.
  const arr = [...array];
  let swapped;

  // Outer do-while loop to ensure at least one pass through the array.
  do {
    swapped = false; // Reset the flag at the beginning of each pass.
    
    // Inner for loop to iterate through the array and compare adjacent elements.
    for (let i = 0; i < arr.length - 1; i++) {
      // If the current element is greater than the next one, swap them.
      if (arr[i] > arr[i + 1]) {
        // Swap the elements using destructuring assignment for a clean swap.
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true; // Set the flag to true because a swap occurred.
      }
    }
  } while (swapped); // Continue looping as long as a swap happened in the last pass.

  return arr;
}

// Example usage from the problem description:
console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));