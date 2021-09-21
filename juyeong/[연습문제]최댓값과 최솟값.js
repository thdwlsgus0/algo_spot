function solution(s) {
  const result = s.split(" ");
  return Math.min(...result) + " " + Math.max(...result);
}
