function solution(input) {
  let answer = [];
  let stack = [];
  let inputArr = input.slice(1)[0].split(" ");
  let arr = inputArr.map(Number);
  stack.push(0);
  // count 세는 방법 외우자..

  let count = {};

  arr.forEach((item) => {
    count[item] = (count[item] || 0) + 1;
  });

  // function freq(item) {
  //   let count = 0;
  //   arr.forEach((i) => {
  //     if (i === item) count++;
  //   });
  //   return count;
  // }

  // for (let i in arr) {
  // if (!count[arr[i]]) {
  //   count[arr[i]] = 1;
  // } else {
  //   count[arr[i]]++;
  // }
  //   console.log(count);
  // }

  arr.forEach((item, index) => {
    while (
      stack.length !== 0 &&
      count[arr[stack[stack.length - 1]]] < count[item]
    ) {
      answer[stack[stack.length - 1]] = item;
      stack.pop();
    }
    stack.push(index);
  });
  while (stack.length > 0) {
    answer[stack[stack.length - 1]] = -1;
    stack.pop();
  }

  console.log(answer.join(" "));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
