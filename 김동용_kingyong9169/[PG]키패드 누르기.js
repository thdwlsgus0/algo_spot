function solution(numbers, hand) {
  let answer = "";
  const keyPad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];
  let leftPos = "*";
  let rightPos = "#";

  for (let number of numbers) {
    if ([1, 4, 7].includes(number)) {
      answer = answer.concat("L");
      leftPos = number;
    } else if ([3, 6, 9].includes(number)) {
      answer = answer.concat("R");
      rightPos = number;
    } else {
      const result = whereisNumber(keyPad, number, leftPos, rightPos);
      result === 0
        ? (hand === "right" ? (rightPos = number) : (leftPos = number),
          (answer = answer.concat(hand[0].toUpperCase())))
        : result < 0
        ? ((answer = answer.concat("L")), (leftPos = number))
        : ((answer = answer.concat("R")), (rightPos = number));
    }
  }
  return answer;
}

function whereisNumber(list, num, left, right) {
  let Num = [];
  let Left = [];
  let Right = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] === "" + num) Num = [i, j];
      if (list[i][j] === "" + left) Left = [i, j];
      if (list[i][j] === "" + right) Right = [i, j];
    }
  }
  return (
    Math.abs(Left[0] - Num[0]) +
    Math.abs(Left[1] - Num[1]) -
    (Math.abs(Right[0] - Num[0]) + Math.abs(Right[1] - Num[1]))
  );
}
