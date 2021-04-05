function duplicateCount(text) {
  dict = []
  countRepeat = 0
  text = text.toLowerCase()
  for (let n of text) {
    dict[n] = 0
  }
  for (n of text) {
    for (let letter2 of text) {
      if (n === letter2) {
        dict[n] += 1
      }
    }
  }
  for (let value of Object.values(dict)) {
    if (value > 1) {
      countRepeat += 1
    }
  }
  return countRepeat
}


console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aabBcde'))
console.log(duplicateCount('indivisibility'))
console.log(duplicateCount('Indivisibilities'))
console.log(duplicateCount('aA11'))
console.log(duplicateCount('ABBA'))