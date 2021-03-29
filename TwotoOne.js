function longest(s1, s2) {
  // Tranforma as duas strings em listas e faz o "sort" destas listas, deixando em ordem alfabética.
  string1Sorted = [];
  string2Sorted = [];
  stringFinal = [];
  
  for (let letter of s1) {
    string1Sorted.push(letter);
  }
  for (let letter of s2) {
    string2Sorted.push(letter);
  }

  string1Sorted.sort();
  string2Sorted.sort();

  for (let letter of string1Sorted) {
    if (stringFinal.includes(letter) == false) {
      stringFinal.push(letter);
    }
  }

  for (let letter of string2Sorted) {
    if (stringFinal.includes(letter) == false) {
      stringFinal.push(letter);
    }
  }
  return stringFinal.sort().join("");  
}


console.log(longest("aretheyhere", "yestheyarehere"));