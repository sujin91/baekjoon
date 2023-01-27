// 숨바꼭질 6 gcd 쓰는문제네
function solution(input) {
  let arr = [];
  input.map((i) => {
    arr.push(i.split(" ").map(Number));
  });

  let number = arr[0][0];
  let start = arr[0][1];
  let member = arr[1];
  let list = [];

  if (number === 1) {
    console.log(member[0] - start);
  } else {
    for (let i = 0; i < member.length; i++) {
      list.push(Math.abs(member[i] - start));
    }

    let gcdMin = 0;
    gcdMin = gcd(list[0], list[1]);

    for (let i = 2; i < list.length; i++) {
      gcdMin = gcd(gcdMin, list[i]);
    }

    console.log(gcdMin);
  }

  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
