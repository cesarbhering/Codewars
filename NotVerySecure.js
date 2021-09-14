/* In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore */

function alphanumeric(string) {
  //your code here
  buffer = true;
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "z",
    "y",
    "w"
  ];
  let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (string.length == 0) buffer = false;

  for (let index = 0; index < string.split("").length; index++) {
    const element = string.split("").map((e) => e.toLowerCase())[index];
    if (!(alpha.includes(element)) && !(numeric.includes(element))){
      buffer = false;
      break;
    }
    
  }
  return buffer;
}
