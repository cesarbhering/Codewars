// Complete the solution so that it reverses the string passed into it.

function solution(str){
  strBackwards = '';
  arrayBuffer = [];
  for (let letter of str) {
    arrayBuffer.unshift(letter);
  }
  for (let letter of arrayBuffer) {
    strBackwards += letter;
  }
  return strBackwards;
}
