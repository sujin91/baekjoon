function solution(input) {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map((char) => Number(char));

  let d = [];
  let v = new Array(n).fill(0);
  let maxIndex = -1;

  for (let i = 0; i < n; i++) {
    d[i] = 1;

    for (let j = 0; j <= i; j++) {
      if (arr[i] > arr[j]) {
        if (d[i] <= d[j]) {
          d[i] = d[j] + 1;
          v[i] = j;
          // maxIndex = console.log(maxIndex);

          // (d[i]-1)
          // console.log(i);
        }
      }
    }
  }

  // for (let i = 0 ; i < n ; i++) {

  // }

  console.log(d, v);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
