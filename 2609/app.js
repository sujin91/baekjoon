function solution(input) {
  let answer = [];
  let arr = { a: Number(input[0]), b: Number(input[1]) };

  let r = arr.a % arr.b;
  let a = arr.a;
  let b = arr.b;

  while (b != 0) {
    r = a % b;
    a = b;
    b = r;
  }

  console.log(a); //최대공약수
  console.log((arr.a * arr.b) / a); //최소공배수

  // input.forEach((item) => {
  //   inp;
  // });

  // console.log((arr.a + arr.b) % arr.c);
  // console.log(((arr.a % arr.c) + (arr.b % arr.c)) % arr.c);
  // console.log((arr.a * arr.b) % arr.c);
  // console.log(((arr.a % arr.c) * (arr.b % arr.c)) % arr.c);
  // console.log(input);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
