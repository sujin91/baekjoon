function solution(input) {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map((char) => Number(char));

  let d = [];

  for (let i = 0; i < n; i++) {
    d[i] = 1;

    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j] && d[i] <= d[j]) {
        d[i] = d[j] + 1;
      }
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
