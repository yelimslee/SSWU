// isPrime

// 문제
// 1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 수

// 출력
// boolean 타입을 리턴해야 합니다.

// 입출력 예시
// let output = isPrime(2);
// console.log(output); // --> true

// output = isPrime(6);
// console.log(output); // --> false

// output = isPrime(17);
// console.log(output); // --> true

// 힌트
// 자바스크립트 내장 객체인 Math를 활용해 불필요한 연산을 줄일 수 있습니다. (javascript square root 또는 자바스크립트 제곱근)


function isPrime(num) {
    if (num <= 1) {  // 1 보다 작으면 소수가 아님
        return false;
    }

    if (num === 2) {  // 2 는 소수가 아님 
        return true;
    }

    if (num % 2 === 0) {  // 2 로 나누어 떨어지면 (짝수) 소수가 아님 
        return false;
    }

    for (let i = 3; i * i <= num; i += 2) {  // 홀수 검사. 주어진 수의 제곱근까지 반복문을 돌면서, 현재 숫자로 나누어 떨어지는지 확인  
        if (num % i === 0) {  // 어떤 숫자로 나누어 떨어진 다면 소수가 아님
            return false;
        }
    }

    return true;
}