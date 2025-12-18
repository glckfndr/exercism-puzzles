//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const operations = {
  "multiplied": (x,y) => x*y, 
  "divided": (x,y) => x/y, 
  "plus": (x,y) => x+y, 
  "minus": (x,y) => x-y}

export const answer = (expr) => {
  if(expr.startsWith("What is?")) throw  new Error('Syntax error');
  if(!expr.startsWith("What is ")) throw  new Error('Unknown operation');  
  const signed = expr.replace("What is ", "").replace("?", "")
    .replaceAll("by ", "")
  const exprArr = signed.split(" ");
  if(exprArr.length == 1) return  Number.parseInt(exprArr)
  if(exprArr.length == 0) throw  new Error('Syntax error')
  while(exprArr.length >= 3){
    let x = Number.parseInt(exprArr[0]);
    let y = Number.parseInt(exprArr[2]);
    if(Number.isNaN(x) || Number.isNaN(y))  throw  new Error('Syntax error')
    if(operations[exprArr[1]]){
      exprArr[0] = operations[exprArr[1]](x, y);
      exprArr.splice(1, 2)        
    }
    else throw  new Error('Unknown operation')
  }
  if(exprArr.length == 2){
    if(!Number.isNaN(Number.parseInt(exprArr[1]))) throw  new Error('Syntax error')
    if(!operations[exprArr[1]]) throw  new Error('Unknown operation');
    throw  new Error('Syntax error')
  }
  return exprArr[0]   
};
