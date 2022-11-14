function solution(input) {
  let answer = [];
  let queue = [];

  let cmdFunc = {
    push_front: (x) => {
      queue.unshift(x);
    },
    push_back: (x) => {
      queue.push(x);
    },
    pop_front: () => {
      if (queue.length === 0) {
        return -1;
      } else {
        return queue.shift();
      }
    },
    pop_back: () => {
      if (queue.length === 0) {
        return -1;
      } else {
        return queue.pop();
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
    if (cmd === "push_front" || cmd === "push_back") {
      cmdFunc[cmd](+value);
    } else {
      answer.push(cmdFunc[cmd]());
    }
  });

  console.log(answer.join("\n"));
}

// const input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .trim()
//   .split("\n");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

solution(input);
