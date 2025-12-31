//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Source - https://stackoverflow.com/a
// Posted by Scott Sauyet
// Retrieved 2025-12-30, License - CC BY-SA 4.0

const subsets = (arr) => arr.reduce((acc, x) => [...acc, ...acc.map(y => y.concat(x))], [[]])

export const knapsack = (maximumWeight, items) => {
  if(items.length == 0) return 0
  if(items.length == 1) return items[0].weight <= maximumWeight ? items[0].value : 0;
  let combinations = subsets(items)
      .filter(el => el.length > 0 && el.reduce((acc, x) => acc + x.weight, 0) <= maximumWeight)
    .sort((a,b) => b.reduce((acc, x) => acc + x.value, 0)-a.reduce((acc, x) => acc + x.value, 0))
  return combinations[0].reduce((acc, x) => acc + x.value, 0)  
};
