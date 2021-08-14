/*
  풀이 1: filter를 이용해서 매 경우마다 값을 뽑은 후에 비교하기
*/ 

function solution(N, stages) {
    let answer = [];
    let stepStages = stages;
    for(let i = 0; i < N; i++) {
        const filterArray = stepStages.filter(v => v === i+1);
        answer.push({
            key: i+1,
            value: filterArray.length / stepStages.length
        });
        stepStages = stepStages.filter(v => v !== i+1);
    }
    
    return answer = answer.sort((a,b)=> {
        return b.value - a.value; 
    }).map((v)=> v.key);
}

console.log(solution(5, [2,1,2,6,2,4,3,3]));
console.log(solution(4, [4,4,4,4,4]));