// isOldEnoughToDrink

// 문제
// 나이를 입력받아 술을 마실 수 있는지(18세 이상) 여부를 리턴해야 합니다.

// 입력
// 인자 1 : age
// number 타입의 나이 (0 이상의 정수)

// 출력
// boolean 타입을 리턴해야 합니다.

function isOldEnoughtToDrink(age) {
    if (age >= 18) {
        return true;
    }else {
        return false;
    }
}