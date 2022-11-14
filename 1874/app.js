function solution(input) {
  let stack = [];
  let m = 0;
  let answer = [];
  let flag;

  input.slice(1).forEach((item) => {
    if (item > m) {
      while (item > m) {
        stack.push(++m);
        answer.push("+");
      }
      stack.pop();
      answer.push("-");
    } else {
      flag = false;

      if (stack.length > 0) {
        let top = stack[stack.length - 1];
        answer.push("-");
        stack.pop();
        if (item == top) {
          flag = true;
        }
      }

      if (!flag) {
        answer = [];
        answer.push("NO");
      }
    }
  });

  console.log(answer.join("\n"));
}

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

solution(input);
