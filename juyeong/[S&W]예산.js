function solution(d, budget) {
  let sum = 0;
  let count = 0;
  d.sort((a, b) => a - b);
  for (let value of d) {
    sum += value;
    count++;
    if (sum > budget) {
      count--;
      break;
    }
  }
  return count;
}
