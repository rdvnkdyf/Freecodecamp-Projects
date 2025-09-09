function checkSet(arrToBeSet, checkValue){
  // Only change code below this line
  const set = new Set(arrToBeSet);
  const hasValue = set.has(checkValue);
  const setSize = set.size;
  return [hasValue, setSize];
  // Only change code above this line
}