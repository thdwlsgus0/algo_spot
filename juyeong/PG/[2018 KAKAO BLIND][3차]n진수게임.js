function solution(n, t, m, p) {
    let result = "";
    let currNum = "";
    for(let i=0; i<t*m; i++)
        currNum += i.toString(n);
    for(let i=0; i<t; i++)
        result += currNum[p - 1 + i * m];
    return result.toUpperCase();
}