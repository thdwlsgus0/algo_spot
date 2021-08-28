function solution(d, budget) {
    let answer = 0;
    let sum=0;
    
    d=d.sort((a,b)=>a-b);
    
    for(let num of d){
        sum+=num;
        if(sum>budget) break;
        answer++;
    }
    return answer;
}