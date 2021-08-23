function solution(new_id) {    
    let answer = new_id
        .toLowerCase()              // 소문자로 치환
        .replace(/[^\w-_.]/g, '')   //  - _ . 빼고 제외
        .replace(/\.{2,}/g, '.')    //  .이 2번 이상은 . 하나로 대체
        .replace(/^\.|\.$/g, '')    //  처음과 끝의 . 제거
        .replace(/^$/, 'a')         //  빈 문자열일 경우 a로 대체
        .slice(0, 15)               //  16이상이면 잘라냄
        .replace(/\.$/, '');        //  다 제거 후 끝에 .은 제거
    
    if(answer.length > 2)
        return answer;
    else{
        while(answer.length < 3)
            answer = answer + answer.charAt(answer.length - 1);
        return answer;
    }
}