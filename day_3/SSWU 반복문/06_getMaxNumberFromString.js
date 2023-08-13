// getMaxNumberFromString

// 문제
// 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 숫자 문자열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// str.split 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

// 입출력 예시
// let output = getMaxNumberFromString('53862');
// console.log(output); // --> '8'

// output = getMaxNumberFromString('4321');
// console.log(output); // --> '4'


function getMaxNumberFromString(str) {
    if (str === '') {
        return '0'
    }

    let maxDigit = 0;  // 최대 숫자를 저장하는 변수, 초기값은 0으로 지정

    for (let i = 0; i < str.length; i++) {
        if (str[i] > maxDigit) {
            maxDigit = str[i];
        }
    }

    return maxDigit;
}