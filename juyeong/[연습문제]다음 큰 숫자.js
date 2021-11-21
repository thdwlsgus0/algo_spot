const find1 = (n) => {return (n.toString(2).match(/1/g) || []).length;}
function solution(n) {
    const n_2 = find1(n)
    let next_n_2 = 0;
    while(n_2 !== next_n_2)
        next_n_2 = find1(++n);
    return +n.toString(10);
}