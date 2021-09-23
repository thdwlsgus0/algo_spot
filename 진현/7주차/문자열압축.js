const strReturn = (stepStr, stepWordLength, nextStr) => {
    return stepStr += stepWordLength === 1? nextStr: stepWordLength + nextStr;
}
function solution(s) {
    let answer = s.length;
    // 자르기 위한 단위
    for(let count = 1; count <= s.length / 2; count++) {
        // substr과 substring의 차이를 잘 이해해보자 
        // substr(start, length) , substring(start, end)
        
        let nextStr = s.substring(0, count);
        let stepWordLength = 1;  // 문자 앞 문자 개수 세어주는 변수
        let stepStr = "";
        for(let j = count; j <= s.length; j+= count) {
            
            if(nextStr === s.substring(j, j + count)) {
                stepWordLength++;
            }
            
            else {
                stepStr = strReturn(stepStr, stepWordLength, nextStr);
                stepWordLength = 1;
                nextStr = s.substring(j, j + count);
            }
        }
        stepStr = strReturn(stepStr, stepWordLength, nextStr);
        answer = Math.min(answer, stepStr.length);
    }
    return answer;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
