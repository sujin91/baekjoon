function solution(input) {
  let answer = 1;
  // let num = [...input[0].split(" ")];
  let [N, R] = input.map((item) => Number(item));

  function div5(n) {
    let cnt = 0;
    for (let i = 5; i <= n; i *= 5) {
      cnt += Math.floor(n / i);
    }
    return cnt;
  }
  function div2(n) {
    let cnt = 0;
    for (let i = 2; i <= n; i *= 2) {
      cnt += Math.floor(n / i);
    }
    return cnt;
  }

  // console.log(div5(100));
  const reuslt5 = div5(N) - div5(R) - div5(N - R);
  const reuslt2 = div2(N) - div2(R) - div2(N - R);

  console.log(Math.min(reuslt2, reuslt5));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
