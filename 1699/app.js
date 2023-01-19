function solution(input) {
  let n = Number(input);
  let d = [0];
  for (let i = 1; i <= n; i++) {
    d[i] = i;
    for (let j = 1; j * j <= i; j++) {
      d[i] = Math.min(d[i], d[i - j * j] + 1);
    }
  }

  console.log(d[n]);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim();
// .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
