function solution(lottos, win_nums) {
    const corr = lottos.filter((num)=>win_nums.includes(num)).length;
    const zero = lottos.filter((num)=>num === 0).length;
    return corr > 0 ? [7-(corr+zero), 7-corr] : zero <= 0 ? [6,6] : [1,6];
}