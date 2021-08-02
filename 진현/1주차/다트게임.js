/*
  풀이 방법 1) 단순 구현 방법
*/

const checkAttribute = (scoreArray, dartResult) => {
    let str = "";
    const obj = {
        'D': 2,
        'S': 1,
        'T': 3,
        '#': -1
    };
    
    for(let index = 0; index < dartResult.length; index++) {
        const word = dartResult[index];
        if(word >= '0' && word <= '9'){
            str += word;
        }
        
        if(['S','D','T'].includes(word)) {
            scoreArray.push(Math.pow(+str, obj[word]));    
            str = '';
        }
        
        if(word === '*') {
           for(let j = scoreArray.length-2; j <= scoreArray.length-1; j++) {
               scoreArray[j] *= 2;
           }          
        }
        
        if(word === '#') {
           scoreArray[scoreArray.length-1] *= obj[word];
        }
    }
    return scoreArray;
}

function solution(dartResult) {
    const scoreArray = [];
    return checkAttribute(scoreArray, dartResult).reduce((acc, cur) => {
        return acc + cur;
    }); 
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));

/*
 정규식을 이용한 해결
*/

function solution1(dartResult) {
    const bonus = {
        'S': 1,
        'D': 2,
        'T': 3
    };
    
    const option = {
        '*': 2,
        "#": -1,
        undefined: 1
    };
    
    const regex = /(\d)+[SDT][*#]?/g;
    const scoreArray = dartResult.match(regex);
    for(let index = 0; index < scoreArray.length; index++) {
        let split = scoreArray[index].match(/(\d{1,})(S|D|T)(\*|#)?/);
        const score = Math.pow(+split[1], bonus[split[2]]) * option[split[3]];
        
        if(split[3] === '*' && scoreArray[index-1]){
            scoreArray[index-1] *= 2;
        }
        
        scoreArray[index] = score;
    }
    
    return scoreArray.reduce((acc,cur)=>acc+cur);
}


console.log(solution1("1S2D*3T"));
console.log(solution1("1D2S#10S"));
console.log(solution1("1D2S0T"));
console.log(solution1("1S*2T*3S"));
console.log(solution1("1D#2S*3S"));
console.log(solution1("1T2D3D#"));
console.log(solution1("1D2S3T*"));