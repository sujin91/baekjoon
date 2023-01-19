function solution(input) {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map((char) => Number(char));
  arr = [0, ...arr];
  let d = Array.from({ length: 1000 * 10000 }, () => 1000 * 10000);
  d[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      d[i] = Math.min(d[i], d[i - j] + arr[j]);
    }
  }
  console.log(d[n]);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
