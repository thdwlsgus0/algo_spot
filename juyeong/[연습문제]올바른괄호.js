function solution(s) {
  const stack = [];
  if (s[0] === ")") return false;
  for (const bracket of s.split("")) {
    if (bracket === ")") {
      stack.pop();
      continue;
    }
    stack.push(bracket);
  }
  return stack.length !== 0 ? false : true;
}
