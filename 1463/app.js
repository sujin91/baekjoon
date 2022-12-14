function solution(input) {
  let d = [];
  let n = Number(input);

  d[0] = 0;
  d[1] = 0;

  for (let i = 2; i <= n; i++) {
    d[i] = d[i - 1] + 1;

    if (i % 2 === 0 && d[i] > d[i / 2] + 1) {
      d[i] = d[i / 2] + 1;
    }

    if (i % 3 === 0 && d[i] > d[i / 3] + 1) {
      d[i] = d[i / 3] + 1;
    }
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
