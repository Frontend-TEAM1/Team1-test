// 4. 짝수와 홀수의 개수 구하기

/*
숫자로 된 배열을 파라미터로 받는 함수 solution이 있습니다.
이 솔루션은 파라미터로 전달받은 함수에서 짝수와 홀수의 개수를 배열로 반환합니다.

최종목표

1. 함수 solution을 숫자 배열을 파라미터로 받는다.
2. 배열 중 짝수와 홀수를 각각 구분하여 길이를 구한다.
3. 길이를 구한 후 각각의 개수를 요소로 담은 배열을 반환한다.
   단, 요소의 순서는 짝수, 홀수 순이다.

ex)
const arr = [1,2,3,4,5]
const a = solution(arr)
console.log(a)

결과값
[2, 3]
[짝수의 개수, 홀수의 개수]
*/

function solution(arr) {
  let odd = arr.filter((el) => el % 2 == 1); // 홀수 let odd = 2n-1
  let even = arr.filter((el) => el % 2 == 0); // 짝수 let even = 2n
  result = console.log(even.length, odd.length);
  let array = [even.length, odd.length];
  return array;
}

// 실행
const arr = [1, 2, 3, 4, 5];

const a = solution(arr);
console.log(a);
