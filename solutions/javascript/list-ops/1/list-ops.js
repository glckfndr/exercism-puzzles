//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(lst=[]) {
    this.values = []
    for(const el of lst){
      if(el instanceof List)
        this.values.push(...el.values);        
      else
        this.values.push(el); 
    }    
  }

  append(lst) {  
    for(const el of lst.values){
      if(el instanceof List)
        this.values.push(...el.values);        
      else
        this.values.push(el);
    }
    return {"values": this.values};
  }  

  concat(lst) {
   this.append(lst)
    return this;
  }

  filter(f) {
    if(this.values.length > 0)
      this.values = this.values.filter(el => f(el));    
    return this;
  }

  map(f) {
    if(this.values.length > 0)
      this.values = this.values.map(el => f(el));    
    return this;
  }

  length() {
    return this.values.length
  }

  foldl(f, start) {
    return this.values.reduce((acc, el) => f(acc, el), start)
  }

  foldr(f, start) {
    return this.values.reverse().reduce((acc, el) => f(acc, el), start)
  }

  reverse() {
    this.values = this.values.reverse()
    return this;
  }
}
