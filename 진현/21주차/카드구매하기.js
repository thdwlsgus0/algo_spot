const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
let p = input[1].split(' ').map((v) => +v);
let dp = new Array(n).fill(0);
dp = [0, ...p];

for(let i = 2; i <= n; i++) {
  for(let j = 1; j < i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + dp[j]);
  }
}

console.log(dp[n]);
