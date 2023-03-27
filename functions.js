
`use strict`;

//Function 1. addThemAll
function addThemAll(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
    sum += args[i];
    }
    return sum;
    }
    
    console.log(addThemAll(2,4));
    console.log(addThemAll(1,2,3,4));
    console.log(addThemAll(5,5,10));


//Function 2. closureMultiply
function multiply(a) {
    return function(b) {
      return a * b;
    }
  }
  
  console.log(multiply(5)(5));
  console.log(multiply(2)(-2));	 
  console.log(multiply(4)(3));

//Function 3. movieSorting
const movies = [ {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 108,
  },
  {
    movie:'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
  },
  {
    movie:'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
  },
  {
    movie:'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
  },
  ]
  
  function byProperty(prop, direction) {
    return function(a, b) {
      let result = 0;
      if (a[prop] < b[prop]) {
        result = -1;
      } else if (a[prop] > b[prop]) {
        result = 1;
      }
      if (direction === '<') {
        result *= -1;
      }
      return result;
    }
  }
  
  console.log(movies.sort(byProperty('releaseYear', '>')));
  console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
  console.log(movies.sort(byProperty('movieName', '>')));

//Function 4. detonatorTimer
//setInterval
function detonatorTimer(delay) {
  let timer = setInterval(() => {
    console.log(delay);
    delay--;
    if (delay < 0) {
      clearInterval(timer);
      console.log('BOOM!');
    }
  }, 1000);
}

console.log (detonatorTimer(5));


//setTimeout
function detonatorTimer(delay) {
  function countdown() {
    console.log(delay);
    delay--;
    if (delay < 0) {
      console.log('BOOM!');
    } else {
      setTimeout(countdown, 1000);
    }
  }

  setTimeout(countdown, 1000);
}

console.log (detonatorTimer(5));

//Function 5. objectFeatures
let me = {
    name: 'Anastasiia',
    gender: 'female',
    age: 28,
    hobby: 'watercolor paintings',
    freeTime: 'exercise',
    myNeeds: 'vacation',
    relatives: 'brother',
    introduce () {
    
    console.log (`My name is ${this.name} and I'm ${this.gender}`);
    },
    family () {
    console.log (`I love my ${this.relatives}, he is ${this.age-8} old`)
    },
    timeSpending () {
    console.log (`I usually work a lot, if I'm not sitting at the computer, then I ${this.freeTime}`);
    },
    plans(){
    console.log (`If I will be healthy, I will definitely plan a ${this.myNeeds}, and do some ${this.hobby}`);
    }
    }
    
    me.introduce ();
    me.family ();
    me.timeSpending ();
    me.plans ();
    
//Function 6. bind
let me = {
    name: 'Anastasiia',
    gender: 'female',
    age: 28,
    hobby: 'watercolor paintings',
    freeTime: 'exercise',
    myNeeds: 'vacation',
    relatives: 'brother',
    introduce () {
      console.log (`My name is ${this.name} and I'm ${this.gender}`);
    },
    family () {
      console.log (`I love my ${this.relatives}, he is ${this.age-8} old`)
    },
    timeSpending () {
      console.log (`I usually work a lot, if I'm not sitting at the computer, then I ${this.freeTime}`);
    },
    plans(){
      console.log (`If I will be healthy, I will definitely plan a ${this.myNeeds}, and do some ${this.hobby}`);
    }
  }
  
  const boundIntroduce = me.introduce.bind(me);
  const boundFamily = me.family.bind(me);
  const boundTimeSpending = me.timeSpending.bind(me);
  const boundPlans = me.plans.bind(me);
  
  boundIntroduce();
  boundFamily();
  boundTimeSpending();
  boundPlans();
  
  setTimeout(boundIntroduce, 1000);
  setTimeout(boundFamily, 2000);
  setTimeout(boundTimeSpending, 3000);
  setTimeout(boundPlans, 4000);

//Function 7. slowerFunction
function someFunction(a, b) {
    return a + b;
  }
  
  function slower(func, seconds) {
    return function(...args) {
      console.log(`Chill out, you will get your result in ${seconds} seconds.`);
      setTimeout(() => {
        const result = func(...args);
        console.log(`Result: ${result}`);
      }, seconds * 1000);
    }
  }
  
  let slowedSomeFunction = slower(someFunction, 5); 
  slowedSomeFunction(2, 3);