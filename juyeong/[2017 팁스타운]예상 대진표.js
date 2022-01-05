function solution(n,a,b)
{
    let answer = 0;
    while(n > 0){
        answer++;
        if((a+1 === b && a%2 !== 0 && b%2 === 0)
           || (a === b+1 && a%2 === 0 && b%2 !== 0))
            break;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        n /= 2;
    }
    return answer;
}