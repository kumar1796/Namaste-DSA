function isPalindrome(x) {
  if (x < 0) {
    return false; // as negative number will not be palindrome e.g -121 != 121-
  }

  let xCopy = x;
  let rev = 0;

  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }

  //   if (rev === xCopy) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return rev === xCopy; // the above commented condition can be replaced with this one line
}

console.log(isPalindrome(1221));
