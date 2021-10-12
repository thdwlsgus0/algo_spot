function solution(line) {
    let answer = [];
    let ans = [];
    let maxX = 0, minX = 0;
    let maxY = 0, minY = 0;
    let zero = [0, 0];
    for(let i = 0; i < line.length - 1; i++){
        let A = line[i][0]; let B = line[i][1]; let E = line[i][2];
        for(let j = i + 1; j < line.length; j++){
            let C = line[j][0]; let D = line[j][1]; let F = line[j][2];
            let x = (B * F - E * D) / (A * D - B * C); let y = (E * C - A * F) / (A * D - B * C);
            ans = ans.filter((value, index) => !(value[0] === x && value[1] === y));
            if(x % 1 === 0 && y % 1 === 0) {
                maxX = maxX >= x ? maxX : x; minX = minX <= x ? minX : x;
                maxY = maxY >= y ? maxY : y; minY = minY <= y ? minY : y;
                ans.push([x, y]);
            }
        }
    }
    for(let i = 0; i < maxY - minY + 1; i++){
        answer.push('.'.repeat(maxX - minX + 1));
    }
    for(let i = 0; i < ans.length; i++){
        zero[0] = Math.floor(answer.length / 2); zero[1] = Math.floor(answer[0].length / 2);
        console.log(zero[0] - ans[i][1], zero[1] - ans[i][0]);
        console.log(answer[zero[0] - ans[i][1]][zero[1] + ans[i][0]]);
        // answer[zero[0] - ans[i][1]][zero[1] + ans[i][0]] = '*';
    }
    console.log(...ans);
    return answer;
}