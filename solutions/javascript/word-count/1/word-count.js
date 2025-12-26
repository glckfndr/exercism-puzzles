//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  let arr = phrase.toLowerCase().replace(/^'(.*)'$/, '$1')
    .replaceAll(/[:.,!\n&@%$^]/g," ")
    .replace(/\s'(.*)'/, ' $1')
    .replaceAll("  "," ").split(" ")
    .filter(el => el != "")
  const counter = {}
  arr.forEach(el => counter[el] = counter[el] ? counter[el] + 1 : 1 )
  return counter
};
