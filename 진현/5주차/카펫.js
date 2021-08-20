const getArea = (brown, yellow) => {
    const sum = brown + yellow;
    
    // 갈색 높이
    for(let height = 3; height <= sum/2; height++) {
        if(sum % height === 0) {
            const width = sum/height;
            
            if((width - 2) * (height -2) === yellow) {
                return [width, height];
            }
        }
    }
}

function solution(brown, yellow) {
    return getArea(brown, yellow);
}

console.log(solution(10,2));
console.log(solution(24,24));