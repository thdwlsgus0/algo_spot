function solution(n, t, m, p) {
    let answer = '';
    const numberArr = [];
    
    for(let i = 0; i < t * m; i++) {
        numberArr.push(i.toString(n));
    }
    
    const result = numberArr.join('').toUpperCase();
    
    for(let i = 1; i <= t; i++) {
        const turnIndex = p + (i - 1) * m;
        answer += result[turnIndex-1];
    }
    
    return answer;
}