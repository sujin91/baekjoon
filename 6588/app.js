function solution(input) {
  let answer = [];
  let arr = input.map((item) => Number(item));
  let primeArr = [];
  function isPrime(item) {
    if (item < 2) {
      return 0;
    }

    for (let i = 2; i <= Math.sqrt(item); i++) {
      if (item % i == 0) {
        return 0;
      }
    }
    primeArr.push(item);
  }

  // arr.forEach((item) => {
  //   isPrime(item);
  // });

  // console.log(answer);

  const binarySearch = (left, right, key) => {
    let mid = 0;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (sum === key) {
        return mid;
      }
      if (primeArr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  };

  arr.forEach((item) => {
    for (let i = 1; i <= item; i++) {
      isPrime(i);
    }

    // 투포인터
    // let left = 0;
    // let right = primeArr.length - 1;
    // while (right - left >= 0) {
    //   let sum = primeArr[left] + primeArr[right];

    //   if (sum === item) {
    //     console.log(`${item} = ${primeArr[left]} + ${primeArr[right]}`);
    //     break;
    //   } else if (sum < item) {
    //     left++;
    //   } else if (sum > item) {
    //     right--;
    //   }
    // }

    primeArr.forEach((num) => {
      answer += binarySearch(0, primeArr.length);
    });

    primeArr = [];
  });

  // arrList.forEach((item) => {
  //   isPrime(item);
  // });

  // console.log(answer.join("\n").trim());
}

const input = require("fs")
  // .readFileSync("/dev/stdin")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
// const input = require("fs").readFileSync("/dev/stdin");
solution(input);
