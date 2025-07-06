function countDigit(n) {
  if (n === 0) return 1;

  // convertung negative numbers to positive
  n = Math.abs(n);

  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = -29909;

let result = countDigit(num);

console.log(result);
