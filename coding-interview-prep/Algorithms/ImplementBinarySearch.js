function binarySearch(searchList, value) {
  let arrayPath = [];
  let low = 0;
  let high = searchList.length - 1;

  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2);
    const midValue = searchList[midIndex];
    
    arrayPath.push(midValue);

    if (midValue === value) {
      return arrayPath; // Target found.
    } else if (midValue < value) {
      low = midIndex + 1; // Search the right half.
    } else {
      high = midIndex - 1; // Search the left half.
    }
  }

  // If the loop finishes, the value was not found.
  return "Value Not Found";
}

// Example usage with the provided test array:
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];

console.log(binarySearch(testArray, 0)); // Expected: [13, 5, 2, 0]
console.log(binarySearch(testArray, 6)); // Expected: "Value Not Found"
console.log(binarySearch(testArray, 13)); // Expected: [13]