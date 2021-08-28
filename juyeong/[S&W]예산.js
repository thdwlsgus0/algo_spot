function solution(d, budget) {
  let sum = 0;
  let count = 0;
  d.sort((a, b) => a - b);
  console.log(d);
  for (let i = 0; sum < budget; i++) {
    sum += d[i];
    count++;
    if (sum > budget) {
      sum -= d[i];
      count--;
      break;
    }
  }
  console.log(sum);
  return count;
}
