// 후위표기식2
function solution(input) {
  let num = Number(input[0]);
  let reg = input[1];
  let arr = input.splice(2);
  let stack = [];

  function alphabetPosition(str) {
    let index = 0;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    alphabet.forEach((i) => {
      if (i === str) {
        index = alphabet.indexOf(i);
      }
    });

    return index;
  }

  for (let i = 0; i < reg.length; i++) {
    if (reg[i] >= "A" && reg[i] <= "Z") {
      stack.push(Number(arr[alphabetPosition(reg[i])]));
    } else {
      if (stack.length > 0) {
        let temp2 = stack.pop();
        let temp = stack.pop();

        if (reg[i] == "+") {
          temp += temp2;
        } else if (reg[i] == "-") {
          temp -= temp2;
        } else if (reg[i] == "*") {
          temp *= temp2;
        } else if (reg[i] == "/") {
          temp /= temp2;
        }

        stack.push(temp);
      }
    }
  }

  answer = stack.pop().toFixed(2);
  console.log(answer);
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
