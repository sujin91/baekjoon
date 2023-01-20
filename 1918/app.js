// 후위표기식
function solution(input) {
  let reg = input[0].split("");
  let stack = [];
  let result = [];

  for (let i = 0; i < reg.length; i++) {
    if (reg[i] >= "A" && reg[i] <= "Z") {
      result.push(reg[i]);
    } else {
      if (reg[i] === "(") {
        stack.push(reg[i]);
      } else if (reg[i] === ")") {
        while (stack.length != 0 && stack[stack.length - 1] != "(") {
          result.push(stack.pop());
        }
        stack.pop();
      } else if (reg[i] === "*" || reg[i] === "/") {
        while (
          stack.length != 0 &&
          (stack[stack.length - 1] == "*" || stack[stack.length - 1] == "/")
        ) {
          result.push(stack.pop());
        }
        stack.push(reg[i]);
      } else if (reg[i] === "+" || reg[i] === "-") {
        while (stack.length != 0 && stack[stack.length - 1] != "(") {
          result.push(stack.pop());
        }
        stack.push(reg[i]);
      }
    }
  }

  while (stack.length != 0) {
    result.push(stack.pop());
  }

  console.log(result.join(""));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
