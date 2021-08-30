/*
  H-Index 구하기
*/
function solution(citations) {
    let answer = 0;
    const MAX_SIZE = 10000;
    for(let h = 0; h <= MAX_SIZE; h++) {
        const moreIndex = citations.filter(v => v >= h).length;
        const smallIndex = citations.filter(v => v <= h).length;
        if(moreIndex >= h && smallIndex <= h) {
            answer = Math.max(h, answer);
        }
    }
    return answer;
 }

 console.log(solution([3, 0, 6, 1, 5]));

 /*
 내림차순 정렬을 이용해서 구하기
 */

 function solution(citations) {
    let answer = 0;

    citations.sort((a, b) => b - a);

    for(let i = 0; i < citations.length; i++) {
        if(citations[i] > i) answer++;
        else break;
    }

    return answer;
}
