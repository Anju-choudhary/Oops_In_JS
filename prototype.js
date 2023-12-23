// whenever in js a method is created what js do is create a property of that method which is called prototype 
//of that method which is blank object in which we can create a property in this obj

function BankAccount(customerName, balance=0){
    this.customerName = customerName; ///properties
    this.accountNumber = Date.now();
    this.balance = balance;
}


BankAccount.prototype.deposit = function (amount){
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount){
    this.balance -= amount;
}
 const AnjuAccount = new BankAccount("Anju", 100000); //AnjuAccount is an istane ofBankaccount

 AnjuAccount.deposit(50000);

 AnjuAccount.deposit(100);

// AnjuAccount.withdraw(1234)

 console.log(AnjuAccount)