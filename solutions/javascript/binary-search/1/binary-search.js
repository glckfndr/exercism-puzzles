//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (arr, x) => {
  let left = 0;  
  let right = arr.length - 1;
  while(left <= right){
    let center = Math.floor((left + right) / 2);
    if(arr[center] == x) return center;
    if(x < arr[center]) right = center - 1
    else if(x > arr[center]) left = center + 1
  }    
  if(arr[0] == x) return 0
  throw new Error("Value not in array")
};
