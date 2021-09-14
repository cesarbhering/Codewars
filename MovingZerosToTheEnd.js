/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. */

var moveZeros = function (arr) {
  // TODO: Program me
  let lastPos = arr.length -1;
  arr.forEach(element => {
    if (element === 0) {
      arr.splice(arr.indexOf(element), 1);
      arr.push(0); 
    }
  });
  return arr;
}
