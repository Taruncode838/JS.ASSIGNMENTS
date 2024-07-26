function repeatedSumOfDigits(n) {
    while (n >= 10) {
      n = n.toString().split('').reduce((acc, current) => acc + parseInt(current), 0);
    }
    return n;
  }  console.log(repeatedSumOfDigits(456)); // Output: 6