const check = (str) => {
  const stack = [];
  for (let c of str) {
    if (c === "(" || c === "{" || c === "[") stack.push(c);
    else {
      const b = stack.pop();
      if (c === ")" && b === "(") continue;
      else if (c === "}" && b === "{") continue;
      else if (c === "]" && b === "[") continue;
      return 0;
    }
  }
  return 1;
};

function solution(s) {
  let count = 0;
  if (s.length % 2 === 1) return 0;
  for (let i = 0; i < s.length; i++) {
    const temp = s.substr(i) + s.substr(0, i);
    if (check(temp)) count++;
  }
  return count;
}
