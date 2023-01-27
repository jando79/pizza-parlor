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
};

PizzaParlor.prototype.pizzaSelected = function() {
  return this.size + " " + this.meat + " " + this.veggie + " " + "= " + this.price;
};

function listPizzas(pizzaToDisplay) {
  let pizzaDetailsDiv = document.querySelector("div#pizza-details");
  const ul = document.createElement("ul");
  Object.keys(pizzaToDisplay.myPizza).forEach(function(key) {
  const pizza = pizzaToDisplay.findPizza(key);
  const li = document.createElement("li");
  li.append(pizza.pizzaSelected());
  li.setAttribute("id", pizza.id);
  ul.append(li);
 });
 pizzaDetailsDiv.append(ul);
};

function Pizza(size, meat, veggie, price) {
  this.size = size;
  this.meat = meat;
  this.veggie = veggie;
  this.price = price;
};


//User Interface Logic

let pizzaParlor = new PizzaParlor ();

function handleFormSubmission(event) {
  event.preventDefault();
  const size = document.querySelector("input[name='user-size']:checked").value;
  const meat = document.getElementById("meat-id").value;
  const veggie = document.getElementById("veggie-id").value;
  const price = pizzaPrice(size, meat, veggie);
  let newPizza = new Pizza(size, meat, veggie, price);
  pizzaParlor.addPizza(newPizza);
  listPizzas(pizzaParlor);
};



