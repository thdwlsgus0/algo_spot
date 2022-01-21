function solution(n, edge) {
  const array = new Array(n).fill().map(() => []);
  const deps = [1];
  const queue = [0];

  for(let e of edge) {
      array[e[0] - 1].push(e[1] - 1);
      array[e[1] - 1].push(e[0] - 1);
  }

  while(queue.length > 0) {
      const cur = queue.shift();

      for(let next of array[cur]) {
          if(!deps[next]) {
              deps[next] = deps[cur] + 1;
              queue.push(next);
          }
      }
  }

  const maxValue = Math.max(...deps);

  return deps.filter((v) => v === maxValue).length;
}
