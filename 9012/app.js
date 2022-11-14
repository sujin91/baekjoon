function solution(rows) {
  // const rows = chunk.toString().trim().split("\n");
  let answer = [];

  rows.slice(1).forEach((item) => {
    let stack = [];

    for (let char of item) {
      if (char === "(") {
        stack.push(char);
      } else {
        if (stack.length === 0) {
          stack.push(char);
          break;
        }
        stack.pop();
      }
    }

    if (stack.length > 0) {
      answer.push("NO");
    } else {
      answer.push("YES");
    }
  });

  console.log(answer.join("\n"));
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
