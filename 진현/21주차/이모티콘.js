const fs = require('fs');
const filePath = process.platform === 'linux'? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const MAX_SIZE = 1001;

const visited = Array.from(new Array(MAX_SIZE), () => new Array(MAX_SIZE));

const BFS = () => {
  let ans =  0;
  const queue = [];

  // queue에는 [현재 화면에 있는 이모티콘, 클립보드에 있는 이모티콘, 시간]
  queue.push([1, 0, 0]);

  while(queue.length > 0) {
    const [screen, clip, time] = queue.shift();
    visited[screen][clip] = true;

    if(screen === n) {
      ans = time;
      break;
    }

    if(screen > 0 && screen <= 1000) {
      if(!visited[screen][screen]) {
        visited[screen][screen] = true;
        queue.push([screen, screen, time + 1]);
      }
    }

    if(screen > 1 && screen <= 1000 && clip > 0 && clip <= 1000) {
      if(!visited[screen-1][clip]) {
        visited[screen-1][clip] = true;
        queue.push([screen-1, clip, time + 1]);
      }
    }

    if(clip > 0 && screen + clip <= 1000) {
      if(!visited[screen + clip][clip]) {
        visited[screen + clip][clip] = true;
        queue.push([screen + clip, clip, time + 1]);
      }
    }
  }

  console.log(ans);
}

BFS();


