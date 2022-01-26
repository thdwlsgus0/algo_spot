const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [height, width] = input[0].split(' ').map((v) => +v);
const matrix = input.slice(1).map((v) => v.split(' ').map((v) => +v));

const checkBoundary = (y, x) => {
  return x >= 0 && x < width && y >= 0 && y < height;
}

const dfs = (y, x, nMatrix) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for(let k = 0; k < 4; k++) {
    const nextX = x + dx[k];
    const nextY = y + dy[k];

    if(checkBoundary(nextY, nextX) && !nMatrix[nextY][nextX]) {
      nMatrix[nextY][nextX] = 2;
      dfs(nextY, nextX, nMatrix);
    }
  }
}

const solution = (width, height) => {
  let answer = 0;
  const blankPoint = [];

  for(let y = 0; y < height; y++) {
    for(let x = 0; x < width; x++) {
      if(!matrix[y][x]) blankPoint.push([y,x]);
    }
  }

  for(let i = 0; i < blankPoint.length; i++) {
    for(let j = i+1; j < blankPoint.length; j++) {
      for(let k = j+1; k < blankPoint.length; k++) {
        const nMatrix = [...matrix];
        nMatrix.forEach((row, i) => {
          nMatrix[i] = [...nMatrix[i]];
        });

        // 벽 세우기
        nMatrix[blankPoint[i][0]][blankPoint[i][1]] = 1;
        nMatrix[blankPoint[j][0]][blankPoint[j][1]] = 1;
        nMatrix[blankPoint[k][0]][blankPoint[k][1]] = 1;

        for(let y = 0; y < height; y++) {
          for(let x = 0; x < width; x++) {
            if(nMatrix[y][x] === 2) {
              dfs(y, x, nMatrix);
            }
          }
        }

        let cnt = 0;

        for(let y = 0; y < height; y++) {
          for(let x = 0; x < width; x++) {
            if(!nMatrix[y][x]) cnt++;
          }
        }

        answer = Math.max(cnt, answer);
      }
    }
  }

  return answer;
}

console.log(solution(width, height));
