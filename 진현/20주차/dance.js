const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
let dp = Array.from(new Array(5), () => Array.from(new Array(5), () => new Array(100001)));

const inputValues = input[0].split(' ').map((v) => +v);
const len = inputValues.length - 1;

const getWeight = (from, to) => {
  if(from === 0) return 2;
  if(from === to) return 1;
  if(Math.abs(from - to) === 2) return 4;
  return 3;
}

const solve = (y, x, target) => {
  if(target === len) return 0;
  if(dp[y][x][target]) return dp[y][x][target];

  const left = solve(inputValues[target], x, target + 1) + getWeight(y, inputValues[target]);
  const right = solve(y, inputValues[target], target + 1) + getWeight(x, inputValues[target]);

  return dp[y][x][target] = Math.min(left, right);
}

console.log(solve(0,0,0));
