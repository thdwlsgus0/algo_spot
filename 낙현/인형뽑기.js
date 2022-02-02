function solution(board, moves) {
    let basket = [];
    let answer = 0;
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1]) {
                let friend = board[j][moves[i] - 1];
                board[j][moves[i] - 1] = 0;
                if (basket[basket.length - 1] === friend) {
                    basket.pop();
                    answer=answer+2;
                } else {
                    basket.push(friend);
                }
                break;
            }
        }
    }
    return answer;
}
