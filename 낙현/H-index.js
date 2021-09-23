function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>a-b);
    for(let i=0; i<Math.max(...citations); i++)  if(citations.filter((num)=>num>=i).length>=i) answer=i;
    return answer;
}