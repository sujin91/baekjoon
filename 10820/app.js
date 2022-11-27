function solution(input) {
  let answer = [];
  let stack = [];
  let result = "";
  // console.log(input);
  // let arr = inputArr.map(Number);
  // stack.push(0);

  input.forEach((str) => {
    if (str === "") {
      return;
    }
    answer = [0, 0, 0, 0];
    for (let char of str) {
      if (97 <= char.charCodeAt() && 122 >= char.charCodeAt()) {
        answer[0]++;
      }
      if (65 <= char.charCodeAt() && 90 >= char.charCodeAt()) {
        answer[1]++;
      }
      if (char >= "0" && char <= "9") {
        answer[2]++;
      }
      if (char === " ") {
        answer[3]++;
      }
    }
    result += answer.join(" ") + "\n";

    // str.forEach((char) => {
    //   console.log(char.charCodeAt());
    // });
  });

  console.log(result.trim());
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
