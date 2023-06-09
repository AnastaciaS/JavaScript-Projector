`use strict`;
// Objects 1. BetweenDates

function durationBetweenDates (startDate = '02 Sep 1994', endDate = '30 Mar 2023', dimension = 'seconds') {
  const units = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000
  };

  const startTime = Date.parse(startDate);
  const endTime = Date.parse(endDate);

  const diff = Math.abs(startTime - endTime);
  const result = Math.floor(diff / units[dimension]);

  return `${result} ${dimension}`;
}

console.log(durationBetweenDates('21 Jul 2025', '19 Mar 2022', 'seconds'));
console.log(durationBetweenDates());



// Objects 2. Prise optimizer

const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };
  
  const optimizer = (priceData) => {
    return Object.entries(priceData)
      .reduce((result, [key, value]) => {
        result[key.toLowerCase()] = Math.round(parseFloat(value) * 100) / 100;
        return result;
      }, {});
  };
  
  const result = optimizer(priceData);
  console.log(result);


// Objects 3. Recursive

function recursiveOddSumTo(number) {
    if (number <= 0) {
      return 0;
    } 
    if (number % 2 === 0) {
      return recursiveOddSumTo(number - 1);
    } 
      return number + recursiveOddSumTo(number - 2);
    
  }
  
  console.log(recursiveOddSumTo(30));


// Objects 3. Iterative

function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2) {
      sum += i;
    }
    return sum;
  }
  
  console.log(iterativeOddSumTo(30));