function calculateYears(principal, interest, tax, desired) {
  // your code
  let result = principal;
  let count = 0;

  if (desired === principal) {
    return 0;
  } 
  else {
    for (i = 1; result <= desired; i += 1) {
      result += (result*interest) * (1 - tax);
      count += 1;
      console.log(result);
    }
  }
  return count;
}

console.log(calculateYears(1000,0.01625,0.18,1200));