// 접미사 배열
function solution(input) {
  let str = input[0];
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str.slice(i));
  }

  stack.sort();
  console.log(stack.join("\n"));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
