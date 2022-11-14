function solution(input) {
  let answer = [];
  let stackL = [...input[0]];
  let stackR = [];

  let cmdFunc = {
    P: (x) => {
      stackL.push(x);
    },
    L: () => {
      if (stackL.length !== 0) {
        stackR.push(stackL.pop());
      }
    },
    D: () => {
      if (stackR.length !== 0) {
        stackL.push(stackR.pop());
      }
    },
    B: () => {
      if (stackL.length !== 0) {
        stackL.pop();
      }
    },
  };
  input.slice(2).forEach((item) => {
    const [cmd, value] = item.split(" ");
    if (cmd === "P") {
      cmdFunc[cmd](value);
    } else {
      cmdFunc[cmd]();
    }
  });

  while (stackL.length > 0) {
    stackR.push(stackL.pop());
  }
  while (stackR.length > 0) {
    answer.push(stackR.pop());
  }
  // console.log(stackR);

  console.log(answer.join(""));
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
