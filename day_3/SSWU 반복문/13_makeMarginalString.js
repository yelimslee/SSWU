// makeMarginalString

// 문제
// 문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 문자열

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.
// str.slice, str.substr, str.substring 사용은 금지됩니다.
// 빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

// 입출력 예시
// let output = makeMarginalString('abc');
// console.log(output); // --> 'aababc'

// output = makeMarginalString('flower');
// console.log(output); // --> 'fflfloflowfloweflower'

// output = makeMarginalString('');
// console.log(output); // --> ''


function makeMarginalString(str) {
    let result = '';  // 결과 문자열 초기화

    for (let i = 0; i < str.length; i++) {  // 문자열의 각 문자를 선택
        for (let j = 0; j <= i; j++) {  // 처음부터 현재 위치까지의 문자를 선택
            result += str[j];  // 결과 문자열에 선택한 문자를 추가
        }
    }

    return result;  // 최종적으로 완성괸 문자열 반환
}