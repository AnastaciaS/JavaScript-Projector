'use strict';

class Food {
  constructor(flavor, taste, portion) {
    this.flavor = flavor;
    this.taste = taste;
    this.portion = portion;
    this._privateProperty = "This is a private property";
  }
  
  bake() {
    console.log("Baked food" + this.flavor);
  }
  
  fry() {
    console.log("Fried food" + this.taste);
  }
  
  grill() {
    console.log("Grilled food" + this.taste);
  }
  
  roast() {
    console.log("Roasted food" + this.flavor);
  }
  
  freeze() {
    console.log("Frozen food" + this.portion);
  }
  
  mix() {
    console.log("Mixed food" + this.flavor);
  }
  
  cut() {
    console.log("Cut food");
  }
}

class Vegetable extends Food {
  constructor(flavor, taste, portion, color) {
    super(flavor, taste, portion);
    this.color = color;
  }
  
  boil() {
    console.log("Boiled vegetable");
  }
}

class Fish extends Food {
  constructor(flavor, taste, portion, type) {
    super(flavor, taste, portion);
    this.type = type;
  }
  
  steam() {
    console.log("Steamed fish");
  }
}

class Dairy extends Food {
  constructor(flavor, taste, portion, origin) {
    super(flavor, taste, portion);
    this.origin = origin;
  }
  
  curdle() {
    console.log("Curdled dairy");
  }
}

class Eggs extends Food {
  constructor(flavor, taste, portion, size) {
    super(flavor, taste, portion);
    this.size = size;
  }
  
  scramble() {
    console.log("Scrambled eggs");
  }
}

class Nuts extends Food {
  constructor(flavor, taste, portion, source) {
    super(flavor, taste, portion);
    this.source = source;
  }
  
  raw() {
    console.log("Raw nuts");
  }
}

Nuts.prototype.cook = function() {
  console.log("Roasted nuts");
};

