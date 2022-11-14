function solution(input) {
  let answer = 0;
  let stack = [];

  [...input].forEach((char, index) => {
    if (char === "(") {
      stack.push(index);
    } else if (char === ")") {
      // 1차이나면 레이저
      if (index - 1 == stack[stack.length - 1]) {
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        answer += 1;
      }
    }
  });
  console.log(answer);
}

const input = require("fs").readFileSync("input.txt").toString().trim();
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input);
