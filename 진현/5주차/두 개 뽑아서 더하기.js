function solution(numbers) {
    const set = new Set();
    for(let i = 0; i < numbers.length-1; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j){
                set.add(numbers[i] + numbers[j]);
            }
        }
    }
    return [...set].sort((a,b) => a-b);
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));