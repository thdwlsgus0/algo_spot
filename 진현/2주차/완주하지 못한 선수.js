/*
 풀이 1) map과 비트연산을 이용한 완주하지 못한 선수 구하기
*/
function solution(participant, completion) {
    let answer = '';
    const completionMap = new Map();
    
    for(let index = 0; index < participant.length; index++) {
        const parter = participant[index];
        const completioner = completion[index];
        
        completionMap.set(parter, (completionMap.get(parter) || 0) + 1);
        completionMap.set(completioner, (completionMap.get(completioner) || 0) - 1);
    }
    
    for(let [k,v] of completionMap) {
        if(v>0)answer = k;
    }
    
    return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));


/*
 풀이 2) 단순히 정렬 후 문자열 위치 비교 
*/

function solution1(participant, completion) {
    
    participant.sort();
    completion.sort();
    
    for(let index = 0; index < participant.length; index++){
        if(participant[index] !== completion[index]) {
            return participant[index];
        }
    }
}

console.log(solution1(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution1(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution1(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));