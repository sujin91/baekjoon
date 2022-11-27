function solution(input) {
  let answer = [];
  let arr = { a: Number(input[0]), b: Number(input[1]), c: Number(input[2]) };

  // input.forEach((item) => {
  //   inp;
  // });

  console.log((arr.a + arr.b) % arr.c);
  console.log(((arr.a % arr.c) + (arr.b % arr.c)) % arr.c);
  console.log((arr.a * arr.b) % arr.c);
  console.log(((arr.a % arr.c) * (arr.b % arr.c)) % arr.c);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
