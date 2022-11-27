function solution(input) {
  let answer = [];
  let arr = {};
  let a,
    b,
    r = 0;

  input.slice(1).forEach((item) => {
    arr.a = Number(item.split(" ")[0]);
    arr.b = Number(item.split(" ")[1]);
    a = arr.a;
    b = arr.b;

    while (b != 0) {
      r = a % b;
      a = b;
      b = r;
    }
    answer.push((arr.a * arr.b) / a);
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
