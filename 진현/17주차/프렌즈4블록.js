const isCheck = (i, j, board) => {
    return ((board[i][j] === board[i+1][j]) && (board[i][j] === board[i][j+1]) && (board[i][j] === board[i+1][j+1]));
}

const accumulateSet = (i, j, answerSet) => {
    answerSet.add(`${i},${j}`);
    answerSet.add(`${i+1},${j}`);
    answerSet.add(`${i},${j+1}`);
    answerSet.add(`${i+1},${j+1}`);
    return answerSet;
}

const reOrderGraph = (m, n, board) => {
    let reBoard = Array.from(Array(m), ()=> Array(n).fill(0));

    for(let i = 0; i < n; i++) {
        let index = m-1;
        for(let j = 0; j < m; j++) {
            if(board[m-1-j][n-i-1] !== 0) {
                reBoard[index--][n-i-1] = board[m-1-j][n-i-1];
            }
        }
    }
	return reBoard;
}

const checkGraph = (m, n, board) => {
    let answer = 0;
    let answerSet = new Set();
    board = board.map((v) => v.split(''));
    
    while(true) {
        for(let i = 0; i < m - 1; i++) {
            for(let j = 0; j < n - 1; j++) {           
                if(board[i][j] === 0) continue;
                else if(isCheck(i, j, board)) {
                    accumulateSet(i, j, answerSet);
                }
            }
        }
        
        if(answerSet.size === 0) break;
        else answer += answerSet.size;
        
        answerSet.forEach((item) => {
            const [row, col] = item.split(',');
            board[row][col] = 0;
        })
        
        answerSet.clear();
        
        board = reOrderGraph(m, n, board);
    }
    
    return answer;
}

function solution(m, n, board) {
    return checkGraph(m, n, board);
}

console.log(solution(4, 5, 	["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));
console.log(solution(2, 2, ["AA", "AA"]));
console.log(solution(7, 2,  ["AA", "BB", "AA", "BB", "ZZ", "ZZ", "CC"]));
console.log(solution(4, 4, ["ABCD", "BACE", "BCDD", "BCDD"]));