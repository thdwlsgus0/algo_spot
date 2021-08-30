function solution(num) {
    let answer = 0;
    while(num !== 1) {
        answer++;
        num = num % 2 === 0? num/2 : num * 3 + 1;
    }
    return answer >= 500? -1: answer;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));