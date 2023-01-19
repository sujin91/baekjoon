function solution(input) {
  let n = Number(input);
  const MAX = 90;
  //1차원
  // let d = [0, 1, 1, 2, 3];

  // for (let i = 2; i <= n; i++) {
  //   d[i] = BigInt(d[i - 1]) + BigInt(d[i - 2]);
  // }

  // console.log(BigInt(d[n]).toString());

  //2차원
  let d = Array.from({ length: MAX + 1 }, () => new Array(2).fill(0));

  d[0] = [0, 0];
  d[1] = [0, 1];
  d[2] = [1, 0];

  for (let i = 3; i <= n; i++) {
    d[i][0] = BigInt(d[i - 1][0]) + BigInt(d[i - 1][1]);
    d[i][1] = BigInt(d[i - 1][0]);
  }

  console.log(BigInt(d[n][0] + d[n][1]).toString());
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
