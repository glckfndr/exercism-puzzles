//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(n) {
    this.size = n;
    this.buffer = Array.from({length: n});
    this.start = -1;
    this.end = -1;
  }

  write(el) {
    this.end++;
    if(this.end === 0) this.start = 0;
    if(this.end - this.start >= this.size) {
      this.end--;
      throw new BufferFullError();
    }
    this.buffer[this.end % this.size] = el; 
  }

  read() {    
    if(this.start === -1 || this.start > this.end)
      throw new BufferEmptyError();
    const res = this.buffer[this.start % this.size]
    this.start++;
    return res;
  }

  forceWrite(el) {
    try{
      this.write(el)
    }
    catch(err){
      this.read();
      this.write(el);
    }
  }

  clear() {
    this.start = -1;
    this.end = -1;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(msg="BufferFullError") {
    super(msg)    
  }
}

export class BufferEmptyError extends Error {
  constructor(msg="BufferEmptyError") {
    super(msg)    
  }
}
