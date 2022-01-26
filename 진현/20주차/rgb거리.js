const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const dpArray = Array.from(new Array(n), () => new Array(3));
let ans = 0;

for(let i = 0; i < n; i++) {
  input[i] = input[i].split(' ').map((v) => +v);
}

for(let i = 0; i < n; i++) {
  dpArray[0][i] = input[0][i];
}

ans = Math.min(...dpArray[0]);

for(let i = 1; i < n; i++) {
  dpArray[i][0] = +input[i][0] + Math.min(dpArray[i-1][1] , dpArray[i-1][2]);
  dpArray[i][1] = +input[i][1] + Math.min(dpArray[i-1][0] , dpArray[i-1][2]);
  dpArray[i][2] = +input[i][2] + Math.min(dpArray[i-1][0] , dpArray[i-1][1]);
}

ans = Math.min(...dpArray[n-1]);

console.log(ans);
