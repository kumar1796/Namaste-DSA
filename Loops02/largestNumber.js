// Write a function that returns the largest number in an array

function findLargest(arr) {
  // if we start function with largest = -1, then it will not give correct result for arrays like [-19,-10,-3], we can start with largest = arr[0] too.
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let elements = [5, 0, 7, 10, 8, 100, 17, 1];

console.log(findLargest(elements));
