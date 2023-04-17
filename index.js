`use strict`;

class Food {
    constructor(taste, portion, flavor) {
        this.flavor = flavor;
        this.taste = taste;
        this.portion = portion;
    }

    cook() {
        console.log('Cooking successful ' + this.portion);
    }

    setSize(portion) {

        if (['small', 'middle', 'large'].includes(portion)) {
            this.portion = portion;
        } else {
            throw new Error('Portion is too small');
        }
    }
}

class Ratatouille extends Food {
    constructor(portion, flavor, forLunch) {
        super(portion, flavor);
        this.forLunch = forLunch;
    }

    cook() {
        
        if (this.forLunch) {
            console.log(this.portion + 'Ratatouille is ready');
        } else {
            console.log(this.taste + 'Ratatouille is not ready yet');
        }
    }
}

class Cheesecake extends Food {
    constructor(taste, portion) {
        super(taste, portion);
    }

    bake() {
        console.log("Bake for 15 min");
    }
}

const a = new Ratatouille('portion', 'flavor', true);
const b = new Cheesecake('taste', 'portion', false);
console.log(a, b, a === b);

const portion = document.getElementById('portion') ?? 'portion';

b.setSize(portion);

console.log(a.portion, b.portion, a === b, a.portion === b.portion);

a.cook();
a.setSize();
b.bake();

console.log('2' + '2');

const margeHeight = (obj, height) => {
    obj.height = height;
    return obj;
};

const aa = margeHeight(a, 10);
const bb = margeHeight(b, 20);

console.log(aa, bb);