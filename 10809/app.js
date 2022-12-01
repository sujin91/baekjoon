function solution(input) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = new Array(26).fill(-1);

  // let inputArr = [...new Set(input[0])] //중복제거
  let inputArr = [...input[0]]

  let alphabetArr = [...alphabet]
  // console.log(inputArr)

  inputArr.forEach((item, index) => {
    if(arr[alphabetArr.findIndex((j) => item === j)] === -1) {
      arr[alphabetArr.findIndex((j) => item === j)] = index;
    }
  })

  // refine = [...new Set(temp)];
  // console.log(refine)

  // var evenIndex = alphabetArr.findIndex((j) => item === j);



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
