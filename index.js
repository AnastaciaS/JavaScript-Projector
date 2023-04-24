'use strict';

class Food {
    constructor(flavor, taste, portion) {
        this.flavor = flavor;
        this.taste = taste;
        this.portion = portion;
        this.#privateProperty = "This is a private property";
    }

    toBake() {
        console.log("To bake food" + this.flavor);
    }

    toFry() {
        console.log("To fry food" + this.taste);
    }

    toGrill() {
        console.log("To grill food" + this.taste);
    }

    toRoast() {
        console.log("To roast food" + this.flavor);
    }

    toFreeze() {
        console.log("To freeze food" + this.portion);
    }

    toMix() {
        console.log("To mix food" + this.flavor);
    }

    toCut() {
        console.log("To cut food");
    }
}

class Vegetable extends Food {
    constructor(flavor, taste, portion, nutrients) {
        super(flavor, taste, portion);
        this.nutrients = nutrients;
    }

    toChop() {
        console.log("To chop vegetable");
    }
}

class Fish extends Food {
    constructor(flavor, taste, portion, type) {
        super(flavor, taste, portion);
        this.type = type;
    }

    toFish() {
        console.log("To fish");
    }
}

class Dairy extends Food {
    constructor(flavor, taste, portion, origin) {
        super(flavor, taste, portion);
        this.origin = origin;
    }

    toCurdle() {
        console.log("To curdle dairy");
    }
}

class Eggs extends Food {
    constructor(flavor, taste, portion, size) {
        super(flavor, taste, portion);
        this.proteins = proteins;
    }

    toBoil() {
        console.log("To boil eggs");
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

const carrot = new Vegetable("sweet", "crunchy", "medium", ["vitamin A", "fiber"]);

const salmon = new Fish("rich", "buttery", "large", "Atlantic");
salmon.toGrill();


const milk = new Dairy("mild", "creamy", "large", "cow");
milk.toCurdle();