function solution(input) {
  let d = [0, 1, 3];
  let n = Number(input);

  for (let i = 3; i <= n; i++) {
    d[i] = d[i - 1] + d[i - 2] + d[i - 2];
  }
  console.log(d[n]);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
