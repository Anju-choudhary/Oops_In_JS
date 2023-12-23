//config
// class config {
//     static dbUser = 'userName';
//     static dbPassword = 'secret';
//     static apiToken = 'abcg'

// }

// console.log(config.apiToken)


//Increment
//let id =1;  wrong to do 
// utility function
class User {
    static id = 1;

    static cache = {
        1: 'some value'
    }
    constructor(name, age, income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++
    }

    checkCache1(){
        console.log(User.cache)
    }

    static checkCache(){
        console.log(this.cache)
    }
    static hasCache(){
        this.checkCache() // this can be used only on static keyword
    }


    static compareByAge(user1, user2){ // static method cannot used in instance
        return user1.age - user2.age
    }


    static compareByIncome(user1, user2){ // static method cannot used in instance
        return user1.income - user2.income
    }
}
console.log(User.hasCache())

const user1 = new User("anju", 25, 10000);
const user2 = new User("Rahul", 56, 1000);
const user3 = new User("Raju", 6, 2000);
const user4 = new User("Maharaj", 56, 1900);

// console.log(user1, user2);

const users = [user1, user2, user3, user4];
//console.log(users)
//users.sort(User.compareByIncome)
console.log(users)