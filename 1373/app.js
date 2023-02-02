// 2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.
function solution(input) {
  // let arr = [];
  let total = 0;
  let answer = [];

  let arr = input.reverse().map(Number);

  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) {
      answer.push(total);
      total = 0;
      total += arr[i];
    } else if (i % 3 === 1) {
      total += arr[i] * 2;
    } else {
      total += arr[i] * 4;
    }
  }

  answer.push(total);
  console.log(answer.splice(1).reverse().join(""));
  // while (input.length > 3) {
  //   arr.unshift(input.splice(-3));
  // }
  // arr.unshift(input); // 배열앞에추가

  // arr.forEach((item) => {
  //   if (item.length === 2) {
  //     answer.push(`${Number(item[0]) * 2 + Number(item[1]) * 1}`);
  //   } else if (item.length === 1) {
  //     answer.push(`${Number(item[0]) * 1}`);
  //   } else {
  //     answer.push(
  //       `${Number(item[0]) * 4 + Number(item[1]) * 2 + Number(item[2]) * 1}`
  //     );
  //   }
  // });

  // console.log(answer.join(""));

  // arr.forEach((item) => {
  //   let j = 0;
  //   for (let i = item.length - 1; i >= 0; i--) {
  //     // console.log(item[j], Math.pow(2, i));
  //     total += Number(item[j]) * Math.pow(2, i);
  //     j++;
  //   }
  //   answer.push(total);
  //   total = 0;
  // });

  // console.log(answer.join(""));
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
