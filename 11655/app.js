// ROT13
function solution(input) {
  let str = input[0].split("");
  // let reg = input[0].split("");
  let stack = [];
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let lower = "abcdefghijklmnopqrstuvwxyz".split("");
  let index = 0;
  let result = "";

  function upperIndex(str) {
    upper.forEach((i) => {
      if (i === str) {
        index = upper.indexOf(i);
      }
    });
    return index;
  }

  function upperText(index) {
    upper.forEach((i) => {
      if (upper.indexOf(i) === index) {
        result = i;
      }
    });

    return result;
  }

  function lowerIndex(str) {
    lower.forEach((i) => {
      if (i === str) {
        index = lower.indexOf(i);
      }
    });
    return index;
  }

  function lowerText(index) {
    lower.forEach((i) => {
      if (lower.indexOf(i) === index) {
        return (result = i);
      }
    });
    return result;
  }

  if (str.length == 1 && str[0] == " ") {
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= "A" && str[i] <= "Z") {
        stack.push(upperText((upperIndex(str[i]) + 13) % 26));
      } else if (str[i] >= "a" && str[i] <= "z") {
        stack.push(lowerText((lowerIndex(str[i]) + 13) % 26));
      } else {
        stack.push(str[i]);
      }
    }
    console.log(stack.join(""));
  }
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
