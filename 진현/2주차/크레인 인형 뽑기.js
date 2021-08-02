/*
 1. 단순 이중 포문을 이용한 계산
*/
const getAnswer = (board, moves) => {
    let answer = 0;
    const resultArray = [];
    const MOVE_LENGTH = moves.length; 
    
     for(let i = 0; i < MOVE_LENGTH; i++) {
        const nowMoveValue = moves[i] - 1;
        for(let j = 0; j <= board[nowMoveValue].length-1; j++) {
            
            if(board[j][nowMoveValue] !== 0) {
                
                if(resultArray[resultArray.length-1] === board[j][nowMoveValue]){
                    answer+=2;
                    resultArray.pop();
                }
                
                else {
                    resultArray.push(board[j][moves[i]-1]);
                }
                
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    return answer; 
}

function solution(board, moves) {
    return getAnswer(board, moves);
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));

/*

map과 reduce를 이용한 연산 구하기

*/

const transform = board => board.reduce((acc, cur) => cur.map((_, i)=> [...(acc[i] || []), cur[i]]), []).map(row => row.reverse().filter(value => value !== 0));

const solution2 = (board, moves) => {
    let answer = 0;
    const stacks = transform(board);
    const resultArray = [];

    for(let index = 0; index < moves.length; index++) {
        const lastValue = stacks[moves[index]-1].pop();
        if(!lastValue)continue;
        if(lastValue === resultArray[resultArray.length-1]) {
            resultArray.pop();
            answer+=2;
            continue;
        }
        resultArray.push(lastValue);
    }
    return answer;
}

console.log(solution2([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));