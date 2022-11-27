function solution(input) {
  let answer = 1;
  let num = Number(input);
  // let arr = input.map((item) => Number(item));

  for (let i = 1; i <= num; i++) {
    answer *= i;
  }

  console.log(answer);

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
