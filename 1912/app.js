function solution(input) {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map((char) => Number(char));

  let d = new Array(n).fill(0);
  d[0] = arr[0];

  for (let i = 1; i < n; i++) {
    if (d[i - 1] + arr[i] > arr[i]) {
      d[i] = d[i - 1] + arr[i];
    } else {
      d[i] = arr[i];
    }
  }

  console.log(Math.max(...d));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
