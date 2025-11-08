//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  #balance
  #isOpen
  constructor() {
    this.#balance = 0;  
    this.#isOpen = false
  }

  open() {
    if(!this.#isOpen){
      this.#isOpen = true
      this.#balance = 0;
    }
    else
     throw new ValueError({message: "Account is already opened"})   
  }

  close() {
    if(this.#isOpen)
      this.#isOpen = false
    else
      throw new ValueError({message: "Account is already closed"})  
  }

  deposit(money) {
    if(this.#isOpen) {
      if(money < 0) throw new ValueError({message: "Cannot deposit negative"})  
      this.#balance += money;
    }
    else{
      throw new ValueError({message: "Account is closed"})  
    }
  }

  withdraw(money) {
    if(this.#isOpen) 
    {
      if(money < 0) throw new ValueError({message: "Cannot withdraw negative"})  
      if(this.#balance < money ) throw new ValueError({message: "Cannot withdraw more than deposited"})
      
      this.#balance -= money
    }
    else{
      throw new ValueError({message: "Account is closed"})  
    }    
  }

  get balance() {
    if(this.#isOpen) return this.#balance;
    throw new ValueError({message: "Account is closed"})
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
