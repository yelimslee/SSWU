// takeLetters

// 문제
// 수(num)와 문자열을 입력받아 차례대로 num개의 문자로 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0)
// 인자 2 : str
// 임의의 길이의 문자열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// num과 str.length 중 더 작은 수만큼 저장(take)합니다.

// let output = takeLetters(2, 'hello');
// console.log(output); // --> 'he'

// output = takeLetters(5, 'codestates');
// console.log(output); // --> 'codes'

// 힌트
// 자바스크립트 표준인 string method를 검색해 봅니다. (javascript string method 또는 자바스크립트 문자열 함수)
// 문자열 중 차례대로 일부의 문자를 취하는 것은 문자열을 자르는(slice) 것과 같습니다.

function takeLetters(num, str) {
    let result = str.slice(0, num)
    return result;
}