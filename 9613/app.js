// GCD 합
function solution(input) {
  let arr = [];

  input.slice(1).map((i) => {
    arr.push(i.split(" ").slice(1).map(Number));
  });

  let total = 0;
  let answer = [];

  arr.forEach((item) => {
    for (let i = 0; i < item.length; i++) {
      for (let j = i + 1; j < item.length; j++) {
        total += gcd(item[i], item[j]);
      }
    }

    answer.push(total);
    total = 0;
  });

  console.log(answer.join("\n"));

  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
