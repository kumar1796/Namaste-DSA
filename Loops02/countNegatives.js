// Write a function that returns the number of negative numbers in an array

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

let elements = [2, -9, 17, 0, 1, -10, -4, 8, -7];

console.log(countNegatives(elements));
