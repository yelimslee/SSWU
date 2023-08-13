// hasRepeatedCharacter

// 문제
// 문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열

// 출력
// boolean 타입을 리턴해야 합니다.

// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// 빈 문자열을 입력받은 경우에는 false을 리턴해야 합니다.

// 입출력 예시
// let output = hasRepeatedCharacter('abcdefg');
// console.log(output); // --> false

// output = hasRepeatedCharacter('codestates');
// console.log(output); // --> true

// output = hasRepeatedCharacter('');
// console.log(output); // --> false


function hasRepeatedCharacter(str) {
    for (let i = 0; i < str.length; i++) {  // 문자열의 각 문자를 선택
        for (let j = i+1; j <str.length; j++) {  // i 다음 위치부터 나머지 문자들과 비교
            if (str[i] === str[j]) {  // 만약 중복된 문자가 발견되면
                return true;  // true를 반환하고 함수 종료
            }
        }
    }

    return false;  // 중복된 문자가 없으면 false를 반환
}