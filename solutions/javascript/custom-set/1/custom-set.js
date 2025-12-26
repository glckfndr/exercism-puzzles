//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  #set
  constructor(arr=[]) {
    this.#set = new Set(arr);
  }
  
  get set(){
    return this.#set
  }

  empty() {
    return this.#set.size == 0
  }

  contains(val) {
    return this.#set.has(val)
  }

  add(val) {
    this.#set.add(val)
    return this;
  }

  subset(other) {
    return this.#set.isSubsetOf(other.set)
  }

  disjoint(other) {
    return this.#set.isDisjointFrom(other.set)
  }

  eql(other) {    
    return this.subset(other) && other.subset(this)
  }

  union(other) {
    return new CustomSet(this.#set.union(other.set).keys())
  }

  intersection(other) {
    return new CustomSet(this.#set.intersection(other.set).keys())
  }

  difference(other) {
    return new CustomSet(this.#set.difference(other.set).keys())
  }
}
