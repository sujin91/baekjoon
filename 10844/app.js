function solution(input) {
  let n = Number(input);
  let d = Array.from({ length: 101 }, () => new Array(10).fill(0));

  for (let i = 1; i <= 9; i++) {
    d[1][i] = 1;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j == 0) {
        d[i][j] = d[i - 1][j + 1] % 1000000000;
      } else if (j == 9) {
        d[i][j] = d[i - 1][j - 1] % 1000000000;
      } else {
        d[i][j] = (d[i - 1][j - 1] + d[i - 1][j + 1]) % 1000000000;
      }
    }
  }

  let answer = d[n].reduce((a, b) => {
    return (a + b) % 1000000000;
  });
  console.log(answer);
  // console.log(d[n].reduce((a, b) => a + b) % 1000000000);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim();
// .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
