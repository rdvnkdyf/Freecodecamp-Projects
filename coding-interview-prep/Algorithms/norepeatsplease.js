function permAlone(str) {
  // Convert the string to an array for easier manipulation.
  const arr = str.split('');
  let count = 0;

  /**
   * Recursive function to generate permutations using Heap's algorithm.
   * @param {number} n - The current index to consider for swapping.
   */
  function generate(n) {
    if (n === 1) {
      // Base case: check the generated permutation.
      // We join the array to form a string and use a regular expression
      // to check for consecutive repeated characters.
      if (!/(.)\1/.test(arr.join(''))) {
        count++;
      }
      return;
    }

    // Recursive step: generate permutations for the remaining elements.
    for (let i = 0; i < n - 1; i++) {
      generate(n - 1);
      // Swap elements to generate new permutations.
      const swapIndex = n % 2 === 0 ? i : 0;
      [arr[swapIndex], arr[n - 1]] = [arr[n - 1], arr[swapIndex]];
    }
    // Final recursive call after the loop.
    generate(n - 1);
  }

  // Start the permutation generation with the full array length.
  generate(arr.length);

  return count;
}

// Example usage from the problem description:
console.log(permAlone('aab'));
console.log(permAlone('aaa'));
console.log(permAlone('aabb'));
console.log(permAlone('abcdefa'));
console.log(permAlone('abfdefa'));
console.log(permAlone('zzzzzzzz'));
console.log(permAlone('a'));
console.log(permAlone('aaab'));
console.log(permAlone('aaabb'));
