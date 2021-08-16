/*
 풀이 1 : 단순 sort  
*/
function solution(strings, n) {
    let answer = [];
    answer = strings.sort((a,b)=> {
        if(a[n] > b[n]) return 1;
        else if(a[n] < b[n]) return -1;
        else if(a[n] === b[n]) {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        }
    });
    return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

/* 
 풀이 2 : charCodeAt 함수 사용
*/

function solution2(strings, n) {
    return strings.sort().sort((a,b) => a.charCodeAt(n) - b.charCodeAt(n));
}

console.log(solution2(["sun", "bed", "car"], 1));
console.log(solution2(["abce", "abcd", "cdx"], 2));


/*
 풀이 3 : localeCompare 함수 사용  
*/

function solution3(strings, n) {
    return strings.sort((a,b) => a[n] === b[n]? a.localeCompare(b): a[n].localeCompare(b[n]));
}

console.log(solution3(["sun", "bed", "car"], 1));
console.log(solution3(["abce", "abcd", "cdx"], 2)); 