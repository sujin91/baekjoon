function solution(input) {
  let answer = 0;
  let arr = input
    .slice(1)[0]
    .split(" ")
    .map((item) => Number(item));

  function isPrime(item) {
    if (item < 2) {
      return 0;
    }

    for (let i = 2; i <= Math.sqrt(item); i++) {
      if (item % i == 0) {
        return 0;
      }
    }
    return item;
  }

  arr.forEach((item) => {
    if (isPrime(item)) answer++;
  });

  console.log(answer);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
