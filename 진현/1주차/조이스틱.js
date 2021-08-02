const sumWordWeight = (word) => {
    return word <= 'M'? word.charCodeAt(0) - 'A'.charCodeAt(0) : 'Z'.charCodeAt(0) - word.charCodeAt(0) + 1;
}

function solution(name) {
    let answer = 0;
    let front = 0;
    let halfFront = 0;
    let back = 0;
    let halfBack = 0;
    const len = name.length; 
    
    const mid = +(len/2);
    for(let index = 0; index < len; index++) {
        answer += sumWordWeight(name[index]);
        if(name[index] !== 'A'){
            front = index;
            if(index < mid) {
                halfFront = index;
            }
        }
        
        if(name[name.length - index] !== 'A'){
            back = index;
            if(name.length - index >= mid) {
                halfBack = index;
            }
        }
    }
    answer += Math.min(Math.min(front, back), Math.min(2*halfFront + halfBack, halfFront + 2 * halfBack));
    return answer;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
