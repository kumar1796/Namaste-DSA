function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let items = [500, 300, -1, -100, 4, -4, 10, 20, 100, -9, 200];
// let items = [1];

console.log(secondLargest(items));
