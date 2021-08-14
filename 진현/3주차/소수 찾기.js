function solution(numbers) {
    const answer = new Set();
    const len = numbers.length; 
    numbers = numbers.split('');
    const visited = new Array(len).fill(0);

    const getPrime = (number) => {
        if([0,1].includes(number)) return false;
        if(number === 2) return true;
        for(let index = 2; index < number; index++) {
            if(number % index === 0)return false;
        }
        return true; 
    }
    
    const getNumbers = (current, str) => {
        if(current === len + 1) return;
        if(getPrime(+str)) answer.add(+str);
        for(let index = 0; index < len; index++) {
            if(visited[index])continue;
            visited[index] = 1;
            getNumbers(current+1, str + numbers[index]);
            visited[index] = 0;
        }
    }    
    
    getNumbers(0, '');
    return answer.size;
}

console.log(solution("17"));
console.log(solution("011"));