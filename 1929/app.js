function solution(input) {
  let answer = [];
  let arr = input.split(" ").map((item) => Number(item));
  let start = arr[0];
  let end = arr[1];

  function isPrime(item) {
    if (item < 2) {
      return 0;
    }

    for (let i = 2; i <= Math.sqrt(item); i++) {
      if (item % i == 0) {
        return 0;
      }
    }
    answer.push(item);
  }

  for (let i = start; i <= end; i++) {
    isPrime(i);
  }
  // arrList.forEach((item) => {
  //   isPrime(item);
  // });

  console.log(answer.join("\n").trim());
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim();
// .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
