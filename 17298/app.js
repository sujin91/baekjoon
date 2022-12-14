function solution(input) {
  let answer = [];
  let stack = [];
  let inputArr = input.slice(1)[0].split(" ");
  let arr = inputArr.map(Number);
  stack.push(0);

  arr.forEach((item, index) => {
    while (stack.length !== 0 && arr[stack[stack.length - 1]] < item) {
      answer[stack[stack.length - 1]] = item;
      stack.pop();
    }
    stack.push(index);
  });
  while (stack.length > 0) {
    answer[stack[stack.length - 1]] = -1;
    stack.pop();
  }

  console.log(answer.join(" "));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
