class BankAccount{
    customerName;
    accountNumber;
    balance = 0;

    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

const AnjuAccount = new BankAccount("Anju", 100000);
AnjuAccount.deposit(1000)
console.log(AnjuAccount)