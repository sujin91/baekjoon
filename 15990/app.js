function solution(input) {
  const MOD = 1000000009;
  const SIZE = 100000;
  let d = Array.from({ length: SIZE + 1 }, () => new Array(3).fill(0));
  d[0] = [0, 0, 0];
  d[1] = [1, 0, 0];
  d[2] = [0, 1, 0];
  d[3] = [1, 1, 1];
  d[4] = [2, 0, 1];

  let arr = input.slice(1).map((item) => Number(item));
  let answer = [];
  for (let i = 4; i <= SIZE; i++) {
    d[i][0] = d[i - 1][1] + d[i - 1][2];
    d[i][1] = d[i - 2][0] + d[i - 2][2];
    d[i][2] = d[i - 3][0] + d[i - 3][1];
  }

  arr.forEach((n) => {
    answer.push((d[n][0] + d[n][1] + d[n][2]) % MOD);
  });

  console.log(answer.join("\n"));
  // console.log(`${(d[n][0] + d[n][1] + d[n][2]) % MOD}\n`);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
