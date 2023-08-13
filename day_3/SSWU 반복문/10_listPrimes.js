// listPrimes

// 문제
// 2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

// 입력
// 인자 1 : num
// number 타입의 정수 (num >= 2)

// 출력
// string 타입을 리턴해야 합니다.
// 2-3-5-7의 형식으로 리턴해야 합니다.

// 주의 사항
// 이중 반복문(double for loop)을 사용해야 합니다.

// 입출력 예시
// let output = listPrimes(2);
// console.log(output); // --> '2'

// output = listPrimes(6);
// console.log(output); // --> '2-3-5'

// output = listPrimes(18);
// console.log(output); // --> '2-3-5-7-11-13-17'


function listPrimes(num) {
    let primes = '';  // 결과를 저장할 빈 문자열을 만듦

  for (let i = 2; i <= num; i++){  // 2부터 num 까지 반복
    let isPrime = true;  // 현재 숫자가 소수인지 여부를 나타내는 변수를 만듦

    for (let j = 2; j <= Math.sqrt(i); j++) {  // 2부터 현재 숫자 직전 까지 반복
      if (i % j === 0) {  // 만약 현재 숫자가 j로 나누어 떨어지면
        isPrime = false;  // 현재 숫자는 소수가 아님
        break;  // 더 이상 확인할 필요가 없으므로 반복문 종료
      }
    }

    if (isPrime) {  // 현재 숫자가 소수라면
      if (primes !== ''){  // 결과 문자열이 비어있지 않으면
        primes += '-';  // '-'를 추가하여 숫자를 구분
      }
      primes += i;  // 현재 숫자를 결과 문자열에 추가
    }
  }

  return primes;  // 최종적으로 구해진 소수들을 문자열로 반환환
}