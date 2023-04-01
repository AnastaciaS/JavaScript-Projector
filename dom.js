function addThemAll(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(addThemAll(2,4));
  console.log(addThemAll(1,2,3,4));
  console.log(addThemAll(5,5,10));