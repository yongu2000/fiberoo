function fib() {
  let first = 0;
  let second = 1;
  let result = 0;
  const final = [];
  final.push(first);
  final.push(second);
  for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
      result = first + second;
      final.push(result);
      first = result;
    } else {
      result = first + second;
      final.push(result);
      second = result;
    }
  }
  return final;
}

function numsToString(arr) {
  return _.map(arr, (num) => `${num}`);
}

function evenInNums(arr) {
  return _.filter(arr, (num) => num % 2 === 0);
}

console.log(fib());
console.log(numsToString(fib()));
console.log(evenInNums(fib()));
