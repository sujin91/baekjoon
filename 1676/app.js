function solution(input) {
  let answer = 1;
  let num = Number(input);
  // let arr = input.map((item) => Number(item));

  let numZero =
    Math.floor(num / 5) +
    Math.floor(num / (5 * 5)) +
    +Math.floor(num / (5 * 5 * 5));

  // for (let i = 1; i <= num; i++) {
  //   answer *= i;
  // }

  console.log(numZero);

  // console.log(answer.join("\n").trim());
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim();
// .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
