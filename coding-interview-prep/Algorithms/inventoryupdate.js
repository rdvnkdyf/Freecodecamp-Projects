function updateInventory(currentInventory, newDelivery) {
  // Create a map from the current inventory for efficient lookups.
  // The key is the item name, and the value is the quantity.
  const inventoryMap = new Map(currentInventory.map(item => [item[1], item[0]]));

  // Iterate over the new delivery items.
  for (const [quantity, itemName] of newDelivery) {
    if (inventoryMap.has(itemName)) {
      // If the item exists, update its quantity.
      inventoryMap.set(itemName, inventoryMap.get(itemName) + quantity);
    } else {
      // If the item is new, add it to the inventory map.
      inventoryMap.set(itemName, quantity);
    }
  }

  // Convert the map back to a 2D array.
  const updatedInventory = Array.from(inventoryMap, ([itemName, quantity]) => [quantity, itemName]);

  // Sort the final inventory array alphabetically by item name.
  updatedInventory.sort((a, b) => a[1].localeCompare(b[1]));

  return updatedInventory;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

// Log the result to see the updated inventory
console.log(updateInventory(curInv, newInv));

// Additional test cases from the problem description:
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []));
console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]));
