/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern: */
function encode(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const numbers = [1, 2, 3, 4, 5];
  let finalString = "";
  const splitString = string.split("").map((e) => {
    let i;
    vowels.includes(e) ? ((i = vowels.indexOf(e)), (e = numbers[i])) : e;
    finalString += e;
  });
  return finalString;
}

/* Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above. */

function decode(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  const numbers = ["1", "2", "3", "4", "5"];
  let finalString = "";
  const splitString = string.split("").map((e) => {
    let i;
    numbers.includes(e) ? ((i = numbers.indexOf(e)), (e = vowels[i])) : e;
    finalString += e;
  });
  return finalString;
}
