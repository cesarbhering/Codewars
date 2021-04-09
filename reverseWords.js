function reverseWords(str) {
  result = [];
  wordsArray = str.split(' ')
  console.log(wordsArray);
  for (let word in wordsArray) {
    let wordNow = [];
    for (let letter of wordsArray[word]){
      wordNow.unshift(letter);
    }
    result.push(wordNow.join(''));
  }
  return result.join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('double  spaced  words'));