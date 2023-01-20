// 네 수
function solution(input) {
  console.log(Number(input[0] + input[1]) + Number(input[2] + input[3]));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
