//Business Logic

function PizzaParlor() {
  this.myPizza = {};
  this.currentId = 0;
};

PizzaParlor.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.myPizza[pizza.id] = pizza;
};

PizzaParlor.prototype.assignId = function() {
  this.current += 1;
  return this.currentId;
};

pizzaPrice = function(size, meat, veggie) {
  let x = 0;
  if (age === "Small") {
    x += 10;
  }
  else if (age === "Medium") {
    x += 12;
  }
  else if (age === "Large") {
    x += 15;
  }
  if (meat === "Rabbit") {
    x += 8;
  }
  else if (meat === "Duck") {
    x += 10;
  }
  else if (meat === "Quail") {
    x += 11;
  }
  else if (movie === "Extra Cheese Instead") {
    x += 5;
  }
  if (veggie === "Basil, Shallots, & Arugala") {
    x += 9;
  }
  else if (veggie === "Tomato, Red Onion, & Garlic") {
    x += 6;
  }
  else if (veggie === "All of It") {
    x += 12;
  }
  return "$" + x;
};

PizzaParlor.prototype.findPizza = function(id) {
  if (this.myPizza[id] !== undefined) {
    return this.myPizza[id];
  }
  return false;
}


