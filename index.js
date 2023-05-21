//1. Using an iterator
function fizzBuzzIterator() {
    let num = 1;
    while (num <= 100) {
      let output = '';
      if (num % 3 === 0) {
        output += 'Fizz';
      }
      if (num % 5 === 0) {
        output += 'Buzz';
      }
      yield output || num;
      num++;
    }
  }
  
  const iterator = fizzBuzzIterator();
  for (let value of iterator) {
    console.log(value);
  }
  
  //1.1. Using a generator
  function* fizzBuzzGenerator() {
    for (let i = 1; i <= 100; i++) {
      if (i % 15 === 0) {
        yield 'FizzBuzz';
      } else if (i % 3 === 0) {
        yield 'Fizz';
      } else if (i % 5 === 0) {
        yield 'Buzz';
      } else {
        yield i;
      }
    }
  }
  
  const generator = fizzBuzzGenerator();

  for (let value of generator) {
    console.log(value);
  }
  
//2. Random number generator
  function* generateRandomNumbers(max, quantity) {
    for (let i = 0; i < quantity; i++) {
      yield Math.floor(Math.random() * (max + 1));
    }
  }

  const maxNumber = 100;
  const quantity = 5;
  
  const randomNumbersGenerator = generateRandomNumbers(maxNumber, quantity);
  
  for (const randomNumber of randomNumbersGenerator) {
    console.log(randomNumber);
  }
  