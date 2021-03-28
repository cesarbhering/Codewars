function duplicateEncode(word){
  // ...
  word = word.toLowerCase();
  listAllLetters = [];
  listDuplicatedLetters = [];
  finalString ='';

  for (let letter of word) {
    listAllLetters.push(letter);
  }

  for (let letter in listAllLetters) {
    for (index = eval(letter) + eval(1); index < listAllLetters.length; index +=1) {
      if (listAllLetters[letter] == listAllLetters[index]) {
        listDuplicatedLetters += listAllLetters[letter]
      }
    }
  }
  for (let letter in listAllLetters) {
    if (listDuplicatedLetters.includes(listAllLetters[letter])) {
      finalString += ')';
    }
    else {
      finalString += '(';
    }
  }
  return finalString
}


console.log(duplicateEncode('Success'));
