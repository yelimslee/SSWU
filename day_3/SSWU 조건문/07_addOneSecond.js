// addOneSecond

// 문제
// 시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다.

// 입력
// 인자 1 : hour
// number 타입의 정수 (0 <= hour && hour < 24)
// 인자 2 : minute
// number 타입의 정수 (0 <= minute && minute < 60)
// 인자 3 : second
// number 타입의 정수 (0 <= second && second < 60)

// 출력
// string 타입을 리턴해야 합니다.
// 1초 뒤에 {hour}시 {minute}분 {second}초 입니다 형식으로 리턴해야 합니다.

function addOneSecond(hour, minute, second) {
    second += 1;

    if (second === 60) {
        second = 0;
        minute += 1;

        if (minute === 60) {
            minute = 0;
            hour = (hour + 1) % 24;
        }
    }

    return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`
}