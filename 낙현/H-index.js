function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>a-b);
    for(let i=0; i<10000; i++)  if(citations.filter((num)=>num>=i).length>=i) answer=i;
    return answer;
}