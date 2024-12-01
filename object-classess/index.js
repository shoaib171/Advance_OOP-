// Scenario: Create a Book class with properties like title, author, and year, and a method getSummary()
// that returns a string with the book's details.
// Question: How can you create two objects from the Book class with different values for title, author, and year?
// Try to implement it, and let me know if you have any questions or need help!

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    console.log(
      `My book title is ${this.title} and written by ${this.author} in ${this.year}`
    );
  }
}

const bookone = new Book("Javascript", "Harry Nelson", 1998);
bookone.getSummary();
// output:My book title is Javascript and written by Harry Nelson in 1998

//---------------------------------------------------------------- Question #02:-----------------------------------------------------------

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says woof!`);
  }
}

const dog1 = new Dog("Rex", "German Shepherd");
const dog2 = new Dog("Buddy", "Golden Retriever");

dog1.bark(); // Output: Rex says woof!
dog2.bark(); // Output: Buddy says woof!

//---------------------------------------------------------------- Question #03:-----------------------------------------------------------
class Calulation {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate area
  getArea() {
    return this.width * this.height;
  }

  // Method to calculate perimeter
  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const myRectangle = new Calulation(5, 3);
console.log(myRectangle.getArea()); // Output: 15
console.log(myRectangle.getPerimeter()); // Output: 16

//---------------------------------------------------------------- Question #04:-----------------------------------------------------------

// Bookstore
// Create a Bookstore class that keeps track of a collection of books.
// Each book has a title, author, and price.
// The Bookstore class should have a method addBook() to add books and a method listBooks() to display all books in the bookstore.
// Objective: Practice working with collections (arrays) within a class.

class NewBook {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}
class Bookstore {
  constructor() {
    this.books = []; // collection of an array to store an books
  }

  addbook(book) {
    this.books.push(book);
  }

  listofBooks() {
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}, Price: $${book.price}`);
    });
  }
}

const book1 = new NewBook("Pyhton", "NL", 101);
const book2 = new NewBook("JS", "TL", 104);
const book3 = new NewBook("Java", "SL", 108);
const book4 = new NewBook("ROR", "LP", 103);
const book5 = new NewBook("Golang", "GL", 254);
const book6 = new NewBook("Swift", "LL", 10);

const newPrograammingCollection = new Bookstore();
newPrograammingCollection.addbook(book1);
newPrograammingCollection.addbook(book2);
newPrograammingCollection.addbook(book3);
newPrograammingCollection.addbook(book4);
newPrograammingCollection.addbook(book5);
newPrograammingCollection.addbook(book6);

newPrograammingCollection.listofBooks();
