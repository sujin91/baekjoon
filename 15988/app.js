function solution(input) {
  let d = [0, 1, 2, 4];
  let answer = [];
  let arr = input.slice(1).map((item) => Number(item));
  let maxNum = Math.max(...arr);

  for (let i = 4; i <= maxNum; i++) {
    d[i] = (d[i - 1] + d[i - 2] + d[i - 3]) % 1000000009;
  }

  for (let i = 0; i < input[0]; i++) {
    console.log(d[arr[i]] % 1000000009);
  }
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
