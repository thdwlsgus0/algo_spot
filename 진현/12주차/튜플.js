const compare = (a, b) => a.length - b.length;

function solution(s) {
    const answer = [];
    const array = s.split(/\},/g)
                  .map(v => v.replace(/\{|}/g, ''))
                  .map(v => v.split(','))
                  .sort(compare);
    
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(!answer.includes(array[i][j])) answer.push(array[i][j]);
        }
    }
    
    return answer.map(v => +v);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));