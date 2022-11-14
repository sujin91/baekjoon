function solution(input) {
  let answer = [];
  let number = input[0];
  let key = input[1];
  let queue = Array.from({ length: number }, (v, i) => i + 1);

  while (queue.length > 0) {
    for (let i = 0; i < key; i++) {
      queue.push(queue.shift());
    }
    answer.push(queue.pop());
  }
  console.log(`<${answer.join(", ")}>`);
}

// const input = require("fs")
//   .readFileSync("input.txt")
//   .toString()
//   .trim()
//   .split(" ");
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

solution(input);
