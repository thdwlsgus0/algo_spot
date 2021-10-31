function solution(expression) {
  const prio = [
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["*", "-", "+"],
    ["*", "+", "-"],
  ];
  const result = [];

  for (let subp of prio) {
    const temp = expression.split(/(\D)/);
    for (let op of subp) {
      while (temp.indexOf(op) !== -1) {
        let calc = 0;
        const idx = temp.indexOf(op);
        if (op === "-") calc = Number(temp[idx - 1]) - Number(temp[idx + 1]);
        if (op === "+") calc = Number(temp[idx - 1]) + Number(temp[idx + 1]);
        if (op === "*") calc = Number(temp[idx - 1]) * Number(temp[idx + 1]);
        temp.splice(idx - 1, 3, calc);
      }
      result.push(Math.abs(eval(temp.join(""))));
    }
  }
  return Math.max(...result);
}
