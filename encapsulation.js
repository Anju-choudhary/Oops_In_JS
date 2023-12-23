//for classes 
class BankAccount{
    customerName;
    accountNumber;
    #balance = 0;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance += amount
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    setBalance(amount){
        if (isNaN(amount)){
            throw new Error ("Amount is not a valid input")
        }
        this.#balance = amount
    }

    set balance(amount){
        if (isNaN(amount)){
            throw new Error ("Amount is not a valid input")
        }
        this.#balance = amount
    }
    getBalance(){
       return this.#balance;
    }

    get balance(){
        return this.#balance;
     }
}

class currentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance=0){
        super(customerName, balance);
    }

    #calaculateInterest(amount){
        console.log('Calculating interest')
    }

    takeBusinessLoan(amount){
        this.#calaculateInterest(amount)
        console.log("Taking business loan" +amount);
    }
}

const AnjuAccount = new currentAccount("Anju", 100000);
// AnjuAccount.deposit(1000);
// AnjuAccount.setBalance(5000);
AnjuAccount.takeBusinessLoan(80000)
console.log(AnjuAccount)