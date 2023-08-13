// makeMultiplesOfDigit

// 문제
// 수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 0) 이상의 정수)

// 출력
// string 타입을 리턴해야 합니다.

// 주의 사항
// 반복문(for)문을 사용해야 합니다.
// 숫자(number string) 사이의 구분은 없습니다. ('3691215')
// 3의 배수가 없을 경우, 빈 문자열을 리턴해야 합니다.

// 입출력 예시
// let output = makeMultiplesOfDigit(7);
// console.log(output); // --> "36"

// output = makeMultiplesOfDigit(19);
// console.log(output); // --> "369121518"


function makeMultiplesOfDigit(num) {
    let result = '';

    for (let i = 1; i <= num; i++) {  // 변수 i 가 1이고 num 까지 1씩 증가
        if (i % 3 === 0) {  //  i 가 3으로 나눴을 때 나머지가 0이면
            result += i;
        }
    }

    return result;
}