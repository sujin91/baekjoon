function solution(input) {
  let inputArr = [...input[0]]
  let stack = []

  
  inputArr.forEach((item, index) => {
    console.log(item)
  })

  console.log(arr.join(" "));
}

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

solution(input);
