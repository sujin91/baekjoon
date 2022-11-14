function solution(input) {
  let stack = [];
  let answer = [];
  let tag = false;

  input.map((item) => {
    item = item + "\n";
    for (let char of item) {
      if (char == " " || char == "\n") {
        while (stack.length > 0) {
          answer.push(stack.pop());
        }
        answer.push(" ");
      } else if (char == "<") {
        tag = true;
        while (stack.length > 0) {
          answer.push(stack.pop());
        }
        answer.push(char);
      } else if (char == ">") {
        tag = false;
        answer.push(char);
      } else if (tag) {
        answer.push(char);
      } else {
        if (tag === false) {
          stack.push(char);
        }
      }
    }
  });
  return answer.join("");
}

const input = require("fs").readFileSync("input.txt").toString().split("\n");
console.log(solution(input));
