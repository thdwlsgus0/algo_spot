const checkBoundary = (nextX, nextY) => {
  return nextX >= -5 && nextX <= 5 && nextY >= -5 && nextY <= 5;
}

const initMap = () => {
  const map = new Map();

  map.set('U', [0, 1]);
  map.set('D', [0, -1]);
  map.set('R', [1, 0]);
  map.set('L', [-1, 0]);

  return map;
}

function solution(dirs) {
  let answer = 0;
  const set = new Set();
  const map = initMap();
  let x = 0;
  let y = 0;

  for(let i = 0; i < dirs.length; i++) {
      let [xWeight, yWeight] = map.get(dirs[i]);
      let nextX = x + xWeight;
      let nextY = y + yWeight;

      if(!checkBoundary(nextX, nextY)) continue;

      if(!set.has(`${x}${y}${nextX}${nextY}`)) {
          answer++;
          set.add(`${x}${y}${nextX}${nextY}`);
          set.add(`${nextX}${nextY}${x}${y}`);
      }

      x = nextX;
      y = nextY;
  }

  return answer;
}
