//for classes 
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

class currentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance=0){
        super(customerName, balance);
    }

    takeBusinessLoan(amount){
        console.log("Taking business loan" +amount);
    }
}

class SavingAccount extends BankAccount{
    transactionLimit = 10000;

    constructor(customerName, balance=0){
        super(customerName, balance);
    }

    takePersonalLoan(amount){
        console.log("Taking personal loan" +amount);
    }
}

const AnjuAccount = new SavingAccount("Anju", 100000);
AnjuAccount.deposit(1000)
console.log(AnjuAccount)

// for constructor

// function BankAccount(customerName, balance=0){
//     this.customerName = customerName; ///properties
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }


// BankAccount.prototype.deposit = function (amount){
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw = function (amount){
//     this.balance -= amount;
// }

// function CurrentAccount(customerName, balance = 0){
//     BankAccount.call(this, customerName, balance) //constructor Linking linked parent constructor to child constructor
//     this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype) // linking parent to child
// CurrentAccount.prototype.takeBussinessLoan = function(amount){
//     console.log("Taking business loan:" +amount)
// }

// function SavingAccount(customerName, balance = 0){
//     BankAccount.call(this, customerName, balance) //constructor Linking linked parent constructor to child constructor
//     this.transactionLimit = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype) // linking parent to child

// SavingAccount.prototype.takePersonalLoan = function(amount){
//     console.log("Taking personal loan:" +amount)
// }

//   const AnjuAccount = new SavingAccount("Anju", 100000); //AnjuAccount is an istane ofBankaccount

//   const RahulAccount = new CurrentAccount("Rahul"); //AnjuAccount is an istane ofBankaccount
// //  AnjuAccount.deposit(50000);

// //  AnjuAccount.deposit(100);

// //  AnjuAccount.withdraw(1234)

//   console.log(AnjuAccount, RahulAccount)