//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  #row
  #lst
  constructor(lst=[]) {
    this.#lst = [...lst]
    this.#row = this.#lst.join()    
    this.length = this.#lst.length
  }

  #match(other){
    return this.#row.match(other.#row)
  }

  compare(other) {
    if(this.length == other.length){
      for(let i=0; i < this.length; i++ ){        
          if(this.#lst[i] != other.#lst[i]) {
            return  "UNEQUAL";                                                 };
      }
      return "EQUAL";
    }    
    if((this.length == 0 && other.length != 0) || other.#match(this))
          return "SUBLIST";
    if(this.#match(other))
            return "SUPERLIST";    
    return "UNEQUAL"
  }  
}
