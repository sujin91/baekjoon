function solution(input) {
  let answer = [];
  let primeArr = [];
  // let num = [...input[0].split(" ")];
  let [start, end] = input.map((item) => Number(item));

  function isPrime(item) {
    if (item < 2) {
      return 0;
    }

    for (let i = 2; i <= Math.sqrt(item); i++) {
      if (item % i == 0) {
        return 0;
      }
    }
    primeArr.push(item);
  }

  function erra(item) {}

  for (let i = start; i < end; i++) {
    isPrime(i);
  }

  let cnt = 0;

  // primeArr.forEach(v => {
  //   let target = v * v;
  //   if (target > end) return;
  //   while (target <= end) {
  //     if(target > start && )
  //   }
  // })
  primeArr.forEach((item) => {
    num = item;
    console.log(num);
    while (item * num <= end) {
      if (item * num >= start) {
        answer.push(item * num);
      }
      num *= item;
    }
  });
  console.log(answer.length);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
