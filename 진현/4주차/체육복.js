/*
 풀이: 단순 그리디로 풀었습니다.
*/
function solution(n, lost, reserve) {
    const array = Array(n).fill(1);
    
    for(let i = 0; i < lost.length; i++) {
        array[lost[i]-1]--;
    }
    
    for(let i = 0; i < reserve.length; i++) {
        array[reserve[i]-1]++;
    }
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            if(array[i-1] === 2) {
                array[i-1]--;
                array[i]++;
            }
            else if(array[i+1] === 2) {
                array[i+1]--;
                array[i]++;
            }
        }
    }
    
    return array.filter(v => v >= 1).length;
}

console.log(solution(5, [2,4], [1,3,5]));
console.log(solution(5, [2,4], [3]));
console.log(solution(3, [3], [1]));