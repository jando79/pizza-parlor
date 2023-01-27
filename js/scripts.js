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

