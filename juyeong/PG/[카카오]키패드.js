function solution(numbers, hand) {
  let answer = [];
  let r_pos = 12;
  let l_pos = 10;
  let rlen = 0;
  let llen = 0;
  const center = [2, 5, 8, 11];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) numbers[i] = 11;
    if (numbers[i] % 3 === 1) {
      // 1,4,7
      answer.push("L");
      l_pos = numbers[i];
    } else if (numbers[i] % 3 === 0) {
      // 3,6,9
      answer.push("R");
      r_pos = numbers[i];
    } else {
      // 2,5,8,0
      rlen =
        center.indexOf(r_pos) != -1
          ? Math.abs(numbers[i] - r_pos) / 3
          : Math.abs(numbers[i] + 1 - r_pos) / 3 + 1;
      llen =
        center.indexOf(l_pos) != -1
          ? Math.abs(numbers[i] - l_pos) / 3
          : Math.abs(numbers[i] - 1 - l_pos) / 3 + 1;

      if (rlen === llen) {
        // 거리가 같은지 비교
        if (hand === "right") {
          answer.push("R");
          r_pos = numbers[i];
        } else {
          answer.push("L");
          l_pos = numbers[i];
        }
      } else if (rlen > llen) {
        // 왼손이 더 가까울 경우
        answer.push("L");
        l_pos = numbers[i];
      } else {
        // 오른손이 더 가까울 경우
        answer.push("R");
        r_pos = numbers[i];
      }
    }
  }
  return answer.join("");
}
