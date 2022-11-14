function solution(input) {
  const stack = [];
  let top = 0;
  let answer = "";
  const cmdFunc = {
    push: (x) => (stack[top++] = x),
    pop: () => {
      if (top > 0) {
        top--;
        return stack.splice(-1);
      } else {
        return -1;
      }
    },
    size: () => stack.length,
    empty: () => (!top ? 1 : 0),
    top: () => (top > 0 ? stack[top - 1] : -1),
  };

  input.slice(1).map((str) => {
    const [cmd, num] = str.split(" ");
    if (cmd === "push") cmdFunc[cmd](+num);
    else answer += `${cmdFunc[cmd]()}\n`;
  });
  return answer;
}

// const input = require("fs").readFileSync("input.txt").toString().split("\n");
// console.log(solution(input));

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(solution(input));
    process.exit();
  });
