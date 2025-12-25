//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  #data;
  #left;
  #right;
  
  constructor(data) {
    this.#data = data;
    this.#left = null;
    this.#right = null;
  }

  get data() {
    return this.#data;
  }
  get right() {
    return this.#right;
  }

  get left() {
    return this.#left;
  }

  insert(data) {
    let next = this;
    let prev = null;
    while(next) {
      prev = next;      
      if(data <= next.data)
          next = next.left;
      else
          next = next.right;
    }   
    if(data <= prev.data)
      prev.#left = new BinarySearchTree(data)
    else
      prev.#right = new BinarySearchTree(data)   
  }

   each(fn) {
    const stack = [];
    let current = this;     
    while (stack.length || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      fn(current.data);      
      current = current.right;
    }
  }
}
