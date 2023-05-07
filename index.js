'use strict';

function Food (quantity, method, portion) {
    this.quantity = quantity;
    this.method = method;
    this.portion = portion;
    this._privateProperty = "This is a private property";
}

Food.prototype.bake = function () {
    console.log ("Baked food");
};

Food.prototype.fry = function () {
    console.log ("Fried food");
};

Food.prototype.grill = function () {
    console.log ("Grilled food");
};

Food.prototype.roast = function () {
    console.log ("Roasted food");
};

Food.prototype.freeze = function () {
    console.log ("Frozen food");
};

Food.prototype.mix = function () {
    console.log ("Mixed food");
};

Food.prototype.getPrivateProperty = function () {
    return this._privateProperty;
};

function Vegetable (quantity, portion, color) {
    Food.call (this, quantity, "boil", portion);
    this.color = color;
}

Vegetable.prototype = Object.create (Food.prototype);

Vegetable.prototype.getNutritionValue = function (quantity) {
    const portionFactor = this.portion / 100; // Assume portion is in grams
    const colorFactor = this.color === 'green' ? 1.2 : 1; // Green vegetables are more nutritious
    return portionFactor * colorFactor * quantity;
};

function Fish (quantity, weight) {
    Food.call (this, quantity, "steam", weight);
    this.type = "fish";
}

Fish.prototype = Object.create(Food.prototype);

Fish.prototype.steam = function () {
    const cookingTimePerKg = 10; // Assume 10 minutes per kg of fish
    return cookingTimePerKg * this.portion;
};

function Dairy (quantity, method) {
    Food.call (this, quantity, method, 100);
    this.origin = "unknown";
    this.isPasteurized = true;
}

Dairy.prototype = Object.create(Food.prototype);

Dairy.prototype.isPasteurized = function () {
    return this.isPasteurized;
};

function Eggs (quantity, size) {
    Food.call (this, quantity, "scramble", size);
    this.type = "egg";
}

Eggs.prototype = Object.create (Food.prototype);

Eggs.prototype.getCholesterolLevel = function (quantity) {
    const cholesterolPerEgg = 200; // Assume 200mg of cholesterol per egg
    return cholesterolPerEgg * quantity;
};

function Nuts (quantity, portion, source) {
    Food.call (this, quantity, "roast", portion);
    this.source = source;
}

Nuts.prototype = Object.create (Food.prototype);

Nuts.prototype.getCaloriesPerOunce = function () {
    const caloriesPerGram = 6; // Assume 6 calories per gram of nuts
    return caloriesPerGram * (this.portion / 28.35); // Convert portion from grams to ounces
};
