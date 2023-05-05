'use strict';

function Food(flavor, taste, portion) {
    this.flavor = flavor;
    this.taste = taste;
    this.portion = portion;
    this.#privateProperty = "This is a private property";
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

Food.prototype.getPrivateProperty = function () {
    return this.#privateProperty;
};

function Vegetable(flavor, taste, portion, color) {
    Food.call(this, flavor, taste, portion);
    this.color = color;
}

Vegetable.prototype = Object.create(Food.prototype);

Vegetable.prototype.getNutritionValue = function (quantity) {
    const portionFactor = this.portion / 100; // Assume portion is in grams
    const colorFactor = this.color === 'green' ? 1.2 : 1; // Green vegetables are more nutritious
    return portionFactor * colorFactor * quantity;
};

function Fish(flavor, taste, portion, type) {
    Food.call(this, flavor, taste, portion);
    this.type = type;
}

Fish.prototype = Object.create(Food.prototype);

Fish.prototype.steam = function () {
    const cookingTimePerKg = 10; // Assume 10 minutes per kg of fish
    return cookingTimePerKg * weight;
};

function Dairy(flavor, taste, portion, origin) {
    Food.call(this, flavor, taste, portion);
    this.origin = origin;
}

Dairy.prototype = Object.create(Food.prototype);

Dairy.prototype.isPasteurized = function () {
    return this.isPasteurized;
};

function Eggs(flavor, taste, portion, size) {
    Food.call(this, flavor, taste, portion);
    this.size = size;
}

Eggs.prototype = Object.create(Food.prototype);

Eggs.prototype.getCholesterolLevel = function (quantity) {
    const cholesterolPerEgg = 200; // Assume 200mg of cholesterol per egg
    return cholesterolPerEgg * quantity;
};

function Nuts(flavor, taste, portion, source) {
    Food.call(this, flavor, taste, portion);
    this.source = source;
}

Nuts.prototype = Object.create(Food.prototype);

Nuts.prototype.getCaloriesPerOunce = function () {
    const caloriesPerGram = 6; // Assume 6 calories per gram of nuts
    return caloriesPerGram * (this.portion / 28.35); // Convert portion from grams to ounces
};
