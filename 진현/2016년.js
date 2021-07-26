// 풀이 1 
/*
 1. a까지 월에 해당되는 일수를 더하고 b를 더해줍니다.
 2. weeks 배열에서 인덱스로 참조합니다.
*/
function solution(a, b) {
    let sum = 0;
    const weeks = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    const days = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    for(let index = 0; index < a-1; index++){
        sum+= days[index];
    }
    sum+=b;
    return weeks[sum%7];
}

// 풀이 2 
/*
  getDay()를 이용해서 문제를 풀 수 있습니다.
*/
function solution2(a, b) {
    const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const today = new Date(`2016-${a}-${b}`);
    return weeks[today.getDay()];
} 

console.log(solution(5, 24));
console.log(solution2(5, 24));