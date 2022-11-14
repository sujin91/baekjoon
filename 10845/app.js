function solution(input) {
  let answer = [];
  let queue = [];

  let cmdFunc = {
    push: (x) => {
      queue.push(x);
    },
    pop: () => {
      if (queue.length === 0) {
        return -1;
      } else {
        return queue.shift();
      }
    },
    size: () => {
      return queue.length;
    },
    empty: () => {
      return queue.length > 0 ? 0 : 1;
    },
    front: () => {
      return queue[0] ? queue[0] : -1;
    },
    back: () => {
      return queue[queue.length - 1] ? queue[queue.length - 1] : -1;
    },
  };
  input.slice(1).forEach((item) => {
    const [cmd, value] = item.split(" ");
    if (cmd === "push") {
      cmdFunc[cmd](+value);
    } else {
      answer.push(cmdFunc[cmd]());
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
