const getRank = (number)  => {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    return rank[number];
}

function solution(lottos, win_nums) {
    const zeroLength = lottos.filter(v => v === 0).length;
    let anyLength = lottos.filter((v) => win_nums.includes(v)).length;
    return [getRank(anyLength + zeroLength), getRank(anyLength)];
}