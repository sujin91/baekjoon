function solution(input) {
  let stack = [];
  let answer = "";
  input.slice(1).map((item) => {
    item = item + "\n";
    for (let char of item) {
      if (char == " " || char == "\n") {
        while (stack.length > 0) {
          answer += stack.pop();
        }
        answer += " ";
      } else {
        stack.push(char);
      }
    }
  });
  return answer;
}

const input = require("fs").readFileSync("input.txt").toString().split("\n");
console.log(solution(input));
