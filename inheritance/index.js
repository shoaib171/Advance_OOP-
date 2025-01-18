class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

//--------------------------------------------------    Simple Bank-Account System ---------------------------------------------

class BankAccount {
  constructor(accountNumber, accountHolderName, accountBalance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
  }
  getAccountDetails() {
    return `Account Number: ${this.accountNumber}, Account Holder Name: ${this.accountHolderName}, Account Balance: ${this.accountBalance}`;
  }

  deposit(amount) {
    this.accountBalance += amount;
    return `Account Balance after deposit: ${this.accountBalance}`;
  }

  withdraw(amount) {
    this.accountBalance -= amount;
    return `Account Balance after withdrawal: ${this.accountBalance}`;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
    super(accountNumber, accountHolderName, accountBalance);
    this.isSalary = isSalary;
  }
  getIsSalary() {
    return `Is Salary Account: ${this.isSalary}`;
  }

  withdraw(amount) {
    if (amount > this.accountBalance) {
      return `Insufficient funds!`;
    }
    this.accountBalance -= amount;
    return `Account Balance after withdrawal: ${this.accountBalance}`;
  }
}
class CurrentAccount extends BankAccount {
  constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
    super(accountNumber, accountHolderName, accountBalance);
    this.odLimit = odLimit;
  }
  getODLimit() {
    return `OD Limit: ${this.odLimit}`;
  }

  withdraw(amount) {
    if (amount > this.accountBalance + this.odLimit) {
      return `Insufficient funds!`;
    }
    this.accountBalance -= amount;
    return `Account Balance after withdrawal: ${this.accountBalance}`;
  }
}

class BusinesAccount extends CurrentAccount {
  constructor(
    accountNumber,
    accountHolderName,
    accountBalance,
    businessName,
    businessCategory
  ) {
    super(accountNumber, accountHolderName, accountBalance);
    this.businessName = businessName;
    this.businessCategory = businessCategory;
  }
  getBusinessDetails() {
    return `Business Name: ${this.businessName}, Business Category: ${this.businessCategory}`;
  }
}

const bankAccount = new BankAccount(123456789, "John Doe", 50000);
console.log(bankAccount.getAccountDetails());
console.log(bankAccount.deposit(15000));
console.log(bankAccount.withdraw(3500));

const savingsAccount = new SavingsAccount(90999, "Aftab Afzal", 50000, true);
console.log(savingsAccount.getAccountDetails());
console.log(savingsAccount.getIsSalary());

const currentAccount = new CurrentAccount(90999, "Aftab Afzal", 50000, 10000);
console.log(currentAccount.getAccountDetails());
console.log(currentAccount.getODLimit());

//------------------------------------------ inheritance overiding-method ------------------------------------------

class Animal {
  makeSound() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Dog barks.");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Dog barks.

                            //   Implement a School Management System:
                            // Parent Class: Person (name, age).
                            // Child Classes: Teacher (subject) and Student (grade).
                            // Add methods to display details for both teachers and students.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  display() {
    return `Teacher Record: ${super.display()}, Subject: ${this.subject}`;
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  display() {
    return `Student Record: ${super.display()}, Grade: ${this.grade}`;
  }
}

const teacher = new Teacher("John Doe", 30, "Mathematics");
console.log(teacher.display());
const student = new Student("Jane Doe", 15, "B");
console.log(student.display());



function updateValue(x) {
    x = 10; // This change does not affect the original variable
    console.log("Inside function:", x);
  }
  
  let num = 5;
  updateValue(num); // Inside function: 10
  console.log("Outside function:", num); // Outside function: 5
  




  