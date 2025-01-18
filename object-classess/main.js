class bikes {
  constructor(brand, model, price, color) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.color = color;
  }
  display() {
    return `The ${this.brand} ${this.model} is priced at ${this.price} and color is ${this.color}`;
  }
  bikehorn() {
    return `The ${this.brand} ${this.model} horn is loud`;
  }
}

const bike1 = new bikes("Honda", "CBR", 250000, "Red");
const bike2 = new bikes("Yamaha", "R1", 350000, "Blue");

console.log(bike1.color);
console.log(bike1.display());
console.log(bike1.bikehorn());


