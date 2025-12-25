//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class Triplet {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;    
  }
  toArray() {
    return [this.a, this.b, this.c]
  }
}
export function triplets({minFactor, maxFactor, sum}) {
      //const {minFactor} = options; 
      const triplets = []
      for(let a = 1; a < sum/3; a++){
        let b = ((2*a - sum)*sum)/(2*(a - sum));
        if(!Number.isInteger(b)) continue;
        let c = sum - a - b;        
        if(a < b && b < c){
          if(minFactor && a < minFactor) continue;
          if(maxFactor && c > maxFactor) continue;
          if(a**2 + b**2 == c**2){            
            triplets.push(new Triplet(a,b,c));            
          }
        }        
    }
  return triplets;
}


