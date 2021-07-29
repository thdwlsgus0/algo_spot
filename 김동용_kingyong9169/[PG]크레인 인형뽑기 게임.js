function solution(board, moves) {
  const answer = [];
  let count = 0;

  loop1: for (let i = 0; i < moves.length; i++) {
    for (let sub of board) {
      if (sub[moves[0] - 1] !== 0) {
        answer.push(sub[moves[0] - 1]);
        sub[moves[0] - 1] = 0;
        moves.splice(0, 1);
        i = -1;
        continue loop1;
      }
    }
    moves.splice(0, 1);
    i = -1;
  }

  loop2: for (let i = 0; i < answer.length; i++) {
    if (answer[i] === answer[i + 1]) {
      answer.splice(i, 2);
      count += 2;
      i = -1;
      continue loop2;
    }
  }

  return count;
}
