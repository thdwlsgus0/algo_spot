function solution(expression) {
    let answer = 0;
    const operator = [
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['-', '*', '+'],
        ['-', '+', '*']
    ];
    let num = expression.split(/[^0-9]/);
    let operators = expression.split(/\w{1,}/);
    operators.shift();
    operators.pop();
    
    num = num.map(v => +v);
    
    for(let i = 0; i < operator.length; i++) {
        let copyNum = num.slice();
        let copyOperator = operators.slice();
        
        for(let j = 0; j < operator[i].length; j++) {
            for(let k = 0; k < copyOperator.length; k++) {
                if(operator[i][j] === copyOperator[k]) {
                    if(copyOperator[k] === '*') {
                        copyNum[k] *= copyNum[k+1];
                    }else if(copyOperator[k] === '+'){
                        copyNum[k] += copyNum[k+1];
                    }else if(copyOperator[k] === '-') {
                        copyNum[k] -= copyNum[k+1];
                    }
                    copyNum.splice(k+1, 1);
                    copyOperator.splice(k, 1);
                    k--;
                }
            }
         
        }
        answer = Math.max(Math.abs(answer), Math.abs(copyNum[0]));
    }
    
    return answer;
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));