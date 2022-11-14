function solution(input) {
  let stack = [];
  let top = 0;
  let answer = "";

  let cmdFunc = {
    push: (x) => {
      console.log("hi", x);
      console.log(x);
      stack[top++] = x;
    },
    pop: () => {
      if (top > 0) {
        top--;
        return stack.splice(-1);
      } else {
        return -1;
      }
    },
    size: () => {
      return stack.length;
    },
    empty: () => {
      return stack.length > 0 ? 0 : 1;
    },
    top: () => {
      if (top > 0) {
        return stack[top - 1];
      } else {
        return -1;
      }
    },
  };
  input.slice(1).forEach((item) => {
    const [cmd, value] = item.split(" ");
    if (cmd === "push") cmdFunc[cmd](+value);
    else answer += `${cmdFunc[cmd]()}\n`;
  });
  console.log(answer);
}

const input = require("fs").readFileSync("input.txt").toString().split("\n");
console.log(solution(input));
