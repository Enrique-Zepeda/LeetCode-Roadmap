const isAlphaNumeric = (c: string): boolean => {
  return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
};

const isPalindrome = (s: string): boolean => {
  let l: number = 0;
  let r: number = s.length - 1;

  while (l < r) {
    while (l < r && !isAlphaNumeric(s[l])) {
      l++;
    }
    while (r > l && !isAlphaNumeric(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};
