function squareDigits(num){
  return parseInt((''+num).split('').map((element) => element * element).join(''));
}

console.log(squareDigits(3212))