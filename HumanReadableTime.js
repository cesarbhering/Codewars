//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable(seconds) {
  // TODO
  let buffSeconds = 0;
  let buffMinutes = 0;
  let buffHours = 0;
  while (seconds > 0) {
    if (buffSeconds < 59) {
      buffSeconds += 1;
      seconds -= 1;
    } else if (buffSeconds == 59 && buffMinutes < 59) {
      seconds -= 1;
      buffMinutes += 1;
      buffSeconds = 00;
    } else if (buffSeconds == 59 && buffMinutes == 59) {
      buffHours += 1;
      seconds -= 1;
      buffMinutes = 00;
      buffSeconds = 00;
    }
  }
  return `${buffHours.toString().padStart(2, "0")}:${buffMinutes
    .toString()
    .padStart(2, "0")}:${buffSeconds.toString().padStart(2, "0")}`;
}

console.log(humanReadable(0));
console.log(humanReadable(5));
console.log(humanReadable(86399));
console.log(humanReadable(359999));
