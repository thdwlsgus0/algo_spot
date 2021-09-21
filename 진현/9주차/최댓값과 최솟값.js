function solution(s) {
    const splitArray = s.split(' ');
    return Math.min(...splitArray) + ' ' + Math.max(...splitArray);
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));