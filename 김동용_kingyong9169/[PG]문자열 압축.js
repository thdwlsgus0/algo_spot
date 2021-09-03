function solution(s) {
    let answer = s.length;
    if(answer === 1) return 1;
    for(let i = 1; i <= s.length / 2; i++){
        let substr = s.substring(0, i);
        let nextstr = "";
        let init = s;
        let count = 0;
        for(let j = i; j <= init.length; j += i){
            if(substr === init.substring(j, j + i)){ // 반복 O
                count += 1;
            }
            else{ // 반복 X
                nextstr = init.substring(j, j + i);
                if(count !== 0){
                    const change = count + 1 + substr;
                    init = init.replace(substr.repeat(count + 1), change);
                    j = init.indexOf(change) + change.length;
                    count = 0;
                }
                substr = nextstr;
            }
        }
        answer = Math.min(answer, init.length);
    }
    return answer;
}