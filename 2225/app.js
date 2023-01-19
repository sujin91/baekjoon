function solution(input) {
  let n = Number(input[0]);
  let k = Number(input[1]);
  let d = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

  d[0][0] = 1;
  for (let i = 0; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      for (let l = 0; l <= j; l++) {
        if (i - 1 >= 0) {
          d[i][j] += d[i - 1][j - l] % 1000000000;
        }
      }
    }
  }

  console.log(d[k][n] % 1000000000);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
