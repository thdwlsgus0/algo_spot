function solution(N, road, K) {
    let answer = 0;
    const arr = Array.from(Array(N), () => new Array(N).fill(Infinity));
    const dist = new Array(N).fill(0);
    const visited = new Array(N).fill(false);
    const INF = Infinity;
    
    const init = () => {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                if(i === j) arr[i][j] = 0;
            }
        }
    
        road.forEach(([a, b, c]) => {
             if(arr[a-1][b-1] !== Infinity && arr[a-1][b-1] < c) return; 
             arr[a-1][b-1] = c;
             arr[b-1][a-1] = c;
        })
    }

    const getIndex = () => {
        let minValue = INF;
        let index = 0;
        for(let i = 0; i < N; i++) {
            if(minValue > dist[i] && !visited[i]) {
                minValue = dist[i];
                index = i;
            }
        }
        return index;
    }
    
    const dijkstra = (start) => {
        for(let i = 0; i < N; i++) {
            dist[i] = arr[start][i];
        }
        
        visited[start] = true;
        
        for(let i = 0; i < N; i++) {
            const current = getIndex();
            visited[current] = true;
            for(let j = 0; j < N; j++) {
                if(!visited[j] && (dist[current] + arr[current][j] < dist[j])) {
                    dist[j] = dist[current] + arr[current][j];
                }
            }
        }
    }
    
    init();
    dijkstra(0);
    return dist.filter(v => v <= K).length;
}

console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3));
console.log(solution(6, [[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]], 4));
