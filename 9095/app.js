function solution(input) {
  let d = [0, 1, 2, 4];
  let answer = [];
  let arr = input.slice(1).map((item) => Number(item));

  arr.forEach((n) => {
    for (let i = 4; i <= n; i++) {
      d[i] = d[i - 1] + d[i - 2] + d[i - 3];
    }
    answer.push(d[n]);
  });

  console.log(answer.join("\n"));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
