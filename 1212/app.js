// 2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.
function solution(input) {
  let answer = [];

  let arr = input.map(Number);
  let arr2 = ["000", "001", "010", "011", "100", "101", "110", "111"];
  let arrFirst = ["0", "1", "10", "11", "100", "101", "110", "111"];

  answer.push(arrFirst[arr[0]]);
  for (let i = 1; i < arr.length; i++) {
    answer.push(arr2[arr[i]]);
  }

  console.log(answer.join(""));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
