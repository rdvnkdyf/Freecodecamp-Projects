function pairwise(arr, arg) {
  let indexSum = 0;
  // A copy of the array to mark elements as used.
  const tempArr = [...arr];

  // Nested loops to check every possible pair.
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = i + 1; j < tempArr.length; j++) {
      // Check if the pair sums to the target and neither element has been used.
      if (tempArr[i] + tempArr[j] === arg && tempArr[i] !== null && tempArr[j] !== null) {
        // Add the indices to the sum.
        indexSum += i + j;

        // Mark the elements as used to prevent reuse.
        // Using null is a simple way to "remove" the element without changing indices.
        tempArr[i] = null;
        tempArr[j] = null;
        
        // Break the inner loop to find the next pair for the current `i`.
        break;
      }
    }
  }

  return indexSum;
}

// Example usage from the problem description:
console.log(pairwise([1, 4, 2, 3, 0, 5], 7)); // should return 11
console.log(pairwise([1, 3, 2, 4], 4)); // should return 1
console.log(pairwise([1, 1, 1], 2)); // should return 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1)); // should return 10
console.log(pairwise([], 100)); // should return 0
