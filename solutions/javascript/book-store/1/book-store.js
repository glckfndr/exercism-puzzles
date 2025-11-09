//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const Discounts = [-1, 1, 0.95, 0.9, 0.8, 0.75]
const Price = 800

function getSum(counter, useUpStrategy){
  let min_sum = 1000000;
  for(let maxBooks = 5; maxBooks > 1; maxBooks--){
    let bookCounter = {...counter};
    let currentNumber = maxBooks;
    let sum = 0;
    let bookNumber;
    do{    
      do{
          bookNumber = 0;
          for(let b in bookCounter){
            if(bookCounter[b] <= 0) continue;
            bookNumber += 1;
            bookCounter[b] -= 1;
            if(bookNumber >= currentNumber) break;                
        }        
        const bookCounterArr = Object.entries(bookCounter)
              .filter(e => e[1] != 0)
              .sort(([, x], [, y]) => y - x);               
        
        bookCounter = Object.fromEntries(bookCounterArr);
        if(bookNumber < currentNumber) 
          currentNumber = bookNumber;
        if(useUpStrategy && currentNumber <= bookCounterArr.length) 
          currentNumber = bookCounterArr.length;        
        sum += bookNumber * Price * Discounts[bookNumber]
      }while(bookNumber > 0)
    }while(currentNumber > 0)
    if(sum < min_sum) min_sum = sum;
  }
  return min_sum
}

export const cost = (books) => {  
  if(books.length == 0) return 0;
  let counter = {"b1": 0, "b2":0, "b3":0, "b4":0, "b5":0} 
  books.forEach(el => counter[`b${el}`] += 1)
  counter = Object.fromEntries(Object.entries({...counter})
              .sort(([, x], [, y]) => y - x));
  const  sum1 = getSum(counter, false);
  const sum2 = getSum(counter, true);
  return sum1 < sum2 ? sum1 : sum2;
};
