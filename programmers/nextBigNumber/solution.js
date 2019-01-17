/*
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

제한 사항
n은 1,000,000 이하의 자연수 입니다.
*/

const n = 15;
/*
function solution(n) {
  let answer = 0;
  const maxNum = 1000000;
  const nBinNum = n.toString(2);
  let countResult = oneCount(nBinNum);

  for (let i = n + 1; i <= maxNum; i++) {
    if (countResult === oneCount(i.toString(2))) {
      answer = i;
      break;
    }
  }

  return answer;
}

function oneCount(n) {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') {
      count++;
    }
  }

  return count;
}
*/
function solution(n) {
  var size = n.toString(2).match(/1/g).length;
  while (n++) {
    if (size === n.toString(2).match(/1/g).length) return n;
  }
}
const result = solution(n);
console.log(result);
