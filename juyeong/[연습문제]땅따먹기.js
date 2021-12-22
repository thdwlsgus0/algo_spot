function solution(land) {   // 성공
    for(let i=1; i<land.length; i++){
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }
    return Math.max(...land[land.length-1]);
}

function solution(land) {   // 처음 내가 푼 풀이(틀림): 한줄씩 최대값을 개선해나가면 된다고 생각함
    let bestScore = [...land[0]];
    for(let i=1; i<land.length; i++){
        for(let j=0; j<land[i].length; j++){
            bestScore[j] += land[i].reduce((acc, curr, idx) => {
                if(idx !== j){
                    if(acc >= curr) return acc;
                    else return curr;
                }
                return acc;
            });
            console.log(bestScore);
        }
    }
    return Math.max(...bestScore);
}

