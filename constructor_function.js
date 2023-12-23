function BankAccount(customerName, balance=0){
    this.customerName = customerName; ///properties
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount){
        this.balance += amount;
    }

    this.withdraw =  (amount) => {
        this.balance -= amount;
    }
}

// const AnjuAccount = new BankAccount("Anju", 1234567890); //AnjuAccount is an istane ofBankaccount

// AnjuAccount.deposit(50000);

// AnjuAccount.deposit(100);

// AnjuAccount.withdraw(1234)

// console.log(AnjuAccount)


// ======================================= 

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositFrom = document.querySelector("#depositFrom");
const accountNumber = document.querySelector("#AccountNumber");
const amount = document.querySelector("#amount");

accountForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account)
    console.log(accounts)
})

depositFrom.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(accounts)
     const account = accounts.find(
        (acc) =>  acc.accountNumber === +accountNumber.value
    )
  console.log(account)

      account.deposit(+amount.value);
      console.log(accounts)
})


