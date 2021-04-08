function solution(string) {
  string = string.split('');
  let result = ''
  for (let letter of string) {
    if (letter == letter.toUpperCase()) {
      result += ' ' + letter;
    } else {
        result += letter;
  } 
  }
  return result;
}



console.log(solution('camelCasing'));

console.log(solution('camelCasingTest'));