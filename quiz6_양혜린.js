// 1. 만들고 싶은 기능 정하기
// 2. 필요한 인풋(입력값)과 아웃풋(출력값) 정하기
// 3. 인풋과 아웃풋을 토대로 기능 구현하기
// 4. 문제 형태로 만들기

// 복권 당첨(두 개의 배열 요소 비교하기)

// 입력한 숫자가 6자리의 당첨 번호 중에 
// 6자리가 다 같으면 1등
// 5자리가 같으면 2등
// 4자리가 같으면 3등 
// 나머지는 낙첨

// 입력값: 6자리의 숫자  // 출력값: 당첨여부(1등, 2등, 3등, 꽝 ..)

const luckyNum = [3, 6, 14, 17, 22, 45];    // 1등 당첨 숫자
let myNum = [3, 6, 14, 17, 22, 45];     // 내가 고른 숫자

function luck () {
    let lucky = luckyNum.filter(x => myNum.includes(x)).length;     // myNum과 luckyNum 배열의 공통 요소의 개수
    // includes : 교집합의 값이 있으면 true, 없으면 false 반환

    // console.log(lucky);

    if (lucky == 6) {
        console.log ('축하합니다. 1등입니다!');
    } else if (lucky == 5) {
        console.log ('2등입니다');
    } else if (lucky == 4) {
        console.log ('3등입니다');
    } else {
        console.log('낙첨입니다');
    }

    return lucky;
}

let result = luck(luckyNum);