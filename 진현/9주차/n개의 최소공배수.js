const gcd = (a, b) => {
    return a % b === 0? b : gcd(b, a%b);
}

function solution(arr) {
    return arr.reduce((acc, cur) => {
        return acc * cur / gcd(acc, cur); 
    }, arr[0]);
}

console.log(solution([2,6,8,14]));
console.log(solution([1,2,3]));