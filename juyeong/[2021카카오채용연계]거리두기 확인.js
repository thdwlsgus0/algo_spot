function solution(places) {
  const result = [];

  places.forEach((room) => {
    room.push(["X", "X", "X", "X", "X"]);
    const rlen = result.length;
    for (let m = 0; m < 5; m++) {
      const row = room[m];
      for (let n = 0; n < 4; n++) {
        const curr = row[n];
        const left = row[n - 1];
        const right = row[n + 1];
        const down = room[m + 1][n];
        const left_diag = room[m + 1][n - 1];
        const right_diag = room[m + 1][n + 1];
        console.log(row, curr, right, down);
        if (curr === "P") {
          // P가 있으면
          if ([right, down].includes("P")) {
            // 오른쪽에 P가 있을 경우
            result.push(0);
            console.log("오른", result);
            break;
          }
          if ([right_diag].includes("P") && [right, down].includes("O")) {
            // 오른쪽 대각선에 P가 있을 경우
            result.push(0);
            console.log("오른대각", result);
            break;
          }
          if ([left_diag].includes("P") && [left, down].includes("O")) {
            // 왼쪽 대각선에 P가 있을 경우
            result.push(0);
            console.log("왼대각", result);
            break;
          }
        }
      }
    }
    if (rlen !== result.length)
      // 다음 방으로 옮기기
      return;
    // 모든 조건 만족
    else result.push(1);
    console.log(result);
  });
  return result;
}
// P가 있으면, -> i
// 1. 하우에 P가 있을 경우 0push -> j+1, i+1
// 2. 대각선에 P가 있을 경우, 내 아래나 대각선 P의 위에 O가 있을 경우 0push
// 3. 그렇지 않을 경우 그대로 반복하고 0으로 break되지 않았다면 마지막에 1push
