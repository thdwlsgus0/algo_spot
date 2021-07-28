function solution(participant, completion) { // 내 알고리즘
    const result = participant.reduce((acc, curr) => { // reduce로 객체로 만든다.
      acc[curr] = (acc[curr] || 0)+1; 
      return acc;
    }, {})
    completion.forEach((x)=>result[x]-=1) // forEach로 result[key]를 찾으면 1씩 감소
    for(let key in result){
        if(result[key]!==0) return key; // 0이 아닌 key 반환
    }
}

function solution2(participant, completion) { //다른 사람 알고리즘
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}