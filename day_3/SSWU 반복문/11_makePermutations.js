// makePermutations

// 문제
// 문자열을 입력받아 해당 문자열에 등장하는 각 문자(letter)를 가지고 만들 수 있는 길이 2의 문자열들을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열

// 출력
// string 타입을 리턴해야 합니다.
// 입력받은 문자열의 각 문자를 0, 1, 2, ..., n이라고 할 경우, 00,01,02,...,nn 형식으로 리턴해야 합니다.

// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// 빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

// 입출력 예시
// let output = makePermutations('ab');
// console.log(output); // --> 'aa,ab,ba,bb'

// output = makePermutations('123');
// console.log(output); // --> '11,12,13,21,22,23,31,32,33'

// output = makePermutations('');
// console.log(output); // --> ''


function makePermutations(str) {
    let result = '';  // 빈 문자열 생성

    for (let i = 0; i < str.length; i++) {  // 문자열의 각 문자를 첫 번째로 선택
        for (let j = 0; j <str.length; j++) {  // 문자열의 각 문자를 두 번째로 선택
            result += str[i] + str[j];  // 두 문자를 이어 붙여서 결과에 추가
            if (i !== str.length -1 || j !== str.length -1){  // 만약 마지막 문자가 아니라면
                result += ',';  // 결과에 쉼표를 추가
            }
        }
    }

    return result;  // 결과 반환
}