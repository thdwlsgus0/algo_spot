function solution(board, moves) {
    let answer = [];
    let count = 0;
    for(let i=0; i<moves.length; i++){
         for(let j=0; j<board.length; j++){
            if(board[j][moves[i]-1] !== 0){
                answer.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
         }
        if(answer[answer.length-2]){
            if(answer[answer.length-1] === answer[answer.length-2]){
                answer.pop();
                answer.pop();
                count+=2;
            }
        }
    }
    return count;
}