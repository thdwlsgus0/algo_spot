function solution(dartResult) {
    let answer = [];
    let num;
    let sum = 0;
    for(let i=0; i<dartResult.length; i++){
        if(!isNaN(dartResult[i])){ // 숫자일 경우
            if(dartResult[i] == 1 && dartResult[i+1] == 0){//10일 경우
                num = 10;
                i+=2; //2자리니까 2번 증가
            }
            else{
                num = dartResult[i];
                i++;
            }    
        }
        switch(dartResult[i]){
            case 'S':
                answer.push(num);
                break;
            case 'D':
                answer.push(Math.pow(num,2)); //제곱
                break;
            case 'T':
                answer.push(Math.pow(num,3)); //세제곱
                break;
            case '*':
                answer[answer.length-1] *= 2;
                answer[answer.length-2] *= 2; //2배
                break;
            case '#':
                answer[answer.length-1] *= -1; //-1배
                break;
            default:
                break;
        }
    }
    for(let i = 0; i<answer.length; i++){ //숫자로 바꿔서 sum에 더해줌
        sum += Number(answer[i]);
    }
    return sum;
}