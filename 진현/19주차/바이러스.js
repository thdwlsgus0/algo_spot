const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const m = Number(input.shift());

let graph = [...new Array(n+1)].map(() => []);
let visited = new Array(n+1).fill(false);
let ans = 0;

visited[1] = true;


const dfs = (node) => {
  graph[node].map((v) => {
    if(!visited[v]) {
      ans++;
      visited[v] = true;
      dfs(v);
    }
  })
}

input.map((i) => {
  const [start, dest] = i.split(' ').map((v)=> +v);
  graph[start].push(dest);
  graph[dest].push(start);
});

dfs(1);
console.log(ans);

