function solution(participant, completion) {
    participant.sort();
    completion.sort(); //전부 정렬
    for (let i=0; i<participant.length; i++){
        if(participant[i]!==completion[i]){ //일치하지않으면
            return participant[i] //리턴
        }
    }
}