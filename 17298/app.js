function solution(input) {
  let answer = [];
  let stack = [];
  let arr = input.slice(1)[0].split(" ");

  arr.forEach((item, index) => {
    for (let num of item) {
      if (stack[stack.length - 1] < num) {
        console.log("5나오라", num);
        answer.push(stack.pop());
      } else {
        stack.push(num);
        console.log("hi", stack);
      }
    }

    console.log(answer);
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
