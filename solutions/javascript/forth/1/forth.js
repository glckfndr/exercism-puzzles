const handle0 = arr => {if(arr.length == 0) throw new Error('Stack empty')}  
const handle1 = arr => {if(arr.length == 1) throw new Error('Only one value on the stack')}  
const op = {"*": (a,b) => a*b, 
            "/": (a,b) => {
              if(a == 0) throw new Error("Division by zero");
              return Math.floor(b/a)
            },
            "+": (a,b) => a + b,
            "-": (a,b) => b - a
           }
const wop = {"dup": (arr) => { handle0(arr); arr.push(arr.at(-1))}, 
            "drop": (arr) => { handle0(arr); arr.pop()},
            "swap": (arr) => { handle0(arr); handle1(arr);
              const x = arr.pop(); const y = arr.pop()
              arr.push(x); arr.push(y)
            },
            "over": (arr) => { handle0(arr); handle1(arr)
              arr.push(arr.at(-2))}
           }

export class Forth {
  #stack
  #dic
  constructor() {
    this.#stack = []
    this.#dic = {}
  }
  #addUserWord(word, def){
    const x = Number(word)
    if(Number.isInteger(x)) throw new Error('Invalid definition')
    if(!this.#dic[word])
        this.#dic[word] = def;          
    else  // redefine word       
        this.#dic[word] = def.map(el => this.#dic[el] ? this.#dic[el]: el);
    for(let wrd in this.#dic){
       this.#dic[wrd] = this.#dic[wrd].map(el => this.#dic[el] ? this.#dic[el]: el)       
      }
  }
  
  evaluate(commands) {
    let arr = commands.toLowerCase().split(' ')    
    if(arr[0] == ":"){
      this.#addUserWord(arr[1], arr.slice(2,-1))
      return;
    }
    arr = arr.map(el => this.#dic[el] ? this.#dic[el]: el).flat()
    for(let el of arr) {
      let x = Number(el)
      if(Number.isInteger(x)){
        this.#stack.push(Number(x))
        continue;
      }
      if(op[el]){ // handle mathematics    
          handle0(this.#stack); 
          handle1(this.#stack)
          this.#stack.push(op[el](this.#stack.pop(), this.#stack.pop()))
          continue;
       }
      if(!wop[el]) throw new Error("Unknown command");
      wop[el](this.#stack)           
    }    
  }

  get stack() {
    return this.#stack
  }
}
