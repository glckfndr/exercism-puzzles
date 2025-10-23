//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.value = value;
    this.computeCells = []    
  }

  setComputeCell(computeCell) {
    this.computeCells.push(computeCell);
  }

  setValue(value) {    
      this.value = value;
      let next = null;
      for(let cell of this.computeCells){
        next = cell
        while(next && next.computeCell) {
          next.setValue();
          next = next.computeCell;
        }
      }
    if(next) next.setValue()   
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    if (this.inputCells.length > 0) {
      this.inputCells.forEach((c) => c.setComputeCell(this));
    }
    this.setValue();
    this.cb = [];
  }
  
  setValue() {
      this.value = this.fn(this.inputCells);
      if(this.cb &&  this.cb.length > 0) {
        this.cb.forEach(cb => cb.fire())
      }
  }
  
  setComputeCell(computeCell) {
    this.computeCell = computeCell;
  }

  addCallback(cb) {
    cb.setComputeCell(this)
    this.cb.push(cb);
  }

  removeCallback(cb) {
    let index = this.cb.indexOf(cb);
    if(index > -1) this.cb.splice(index, 1);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }
  setComputeCell(computeCell) {
    this.computeCell = computeCell;
    this.value = this.computeCell.value
  }

  fire() {
     for(let cell of this.computeCell.cb){
        if(this.value !== this.computeCell.value){
          this.value = this.computeCell.value;
          if(cell.fn.length == 0) this.values.push(cell.fn());
          else this.values.push(cell.fn(this.computeCell))  
      }
    }
  }
}