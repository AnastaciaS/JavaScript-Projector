'use strict';

function Food(flavor, taste, portion) {
    this.flavor = flavor;
    this.taste = taste;
    this.portion = portion;
    this._privateProperty = "This is a private property";
}

Food.prototype.bake = function () {
    console.log("Baked food" + this.flavor);
};

Food.prototype.fry = function () {
    console.log("Fried food" + this.taste);
};

Food.prototype.grill = function () {
    console.log("Grilled food" + this.taste);
};

Food.prototype.roast = function () {
    console.log("Roasted food" + this.flavor);
};

Food.prototype.freeze = function () {
    console.log("Frozen food" + this.portion);
};

Food.prototype.mix = function () {
    console.log("Mixed food" + this.flavor);
};

Food.prototype.cut = function () {
    console.log("Cut food");
};

function Vegetable(flavor, taste, portion, color) {
    Food.call(this, flavor, taste, portion);
    this.color = color;
}

Vegetable.prototype = Object.create(Food.prototype);
Vegetable.prototype.constructor = Vegetable;

Vegetable.prototype.boil = function () {
    console.log("Boiled vegetable");
};

function Fish(flavor, taste, portion, type) {
    Food.call(this, flavor, taste, portion);
    this.type = type;
}

Fish.prototype = Object.create(Food.prototype);
Fish.prototype.constructor = Fish;

Fish.prototype.steam = function () {
    console.log("Steamed fish");
};

function Dairy(flavor, taste, portion, origin) {
    Food.call(this, flavor, taste, portion);
    this.origin = origin;
}

Dairy.prototype = Object.create(Food.prototype);
Dairy.prototype.constructor = Dairy;

Dairy.prototype.curdle = function () {
    console.log("Curdled dairy");
};

function Eggs(flavor, taste, portion, size) {
    Food.call(this, flavor, taste, portion);
    this.size = size;
}

Eggs.prototype = Object.create(Food.prototype);
Eggs.prototype.constructor = Eggs;

Eggs.prototype.scramble = function () {
    console.log("Scrambled eggs");
};

function Nuts(flavor, taste, portion, source) {
    Food.call(this, flavor, taste, portion);
    this.source = source;
}

Nuts.prototype = Object.create(Food.prototype);
Nuts.prototype.constructor = Nuts;

Nuts.prototype.raw = function () {
    console.log("Raw nuts");
};

Nuts.prototype.cook = function () {
    console.log("Roasted nuts");
};
