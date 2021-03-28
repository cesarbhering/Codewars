function iqTest(numbers){
  // ...
  let oddBuffer = 0;
  let evenBuffer = 0;
  let listNumbers = numbers.split(' ').map(Number);
  for (let number in listNumbers) {
    if (listNumbers[number] % 2 == 0) {
      evenBuffer += 1;
    }
    else {
      oddBuffer += 1;
    }
  }
  if (evenBuffer > oddBuffer) {
    for (let number in listNumbers) {
      if (listNumbers[number] % 2 != 0) {
        return eval(number) + eval(1);
      }
    }
  }
  else {
    for (let number in listNumbers) {
      if (listNumbers[number] % 2 == 0) {
        return eval(number) + eval(1);
      }
    }
  }
 }




console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 2"));