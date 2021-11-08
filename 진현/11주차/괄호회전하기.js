const dictionary = {
    '[' : ']',
    '{' : '}',
    '(' : ')'
}

const checkShape = (s) => {
    let stack = [];
    
    for(let index = 0; index < s.length; index++) {
       if(['[', '{', '('].includes(s[index])) stack.push(s[index]);
       else if(s[index] === dictionary[stack[stack.length-1]]) stack.pop();
       else stack.push(s[index]);
    }
    
    return stack.length === 0? true: false;
}

function solution(s) {
    let answer = 0;
    
    for(let index = 0; index < s.length; index++) {
          const str = s.slice(1) + s.slice(0,1);
          s = str;
          answer += checkShape(s)? 1: 0;
    }
    
    return answer;
}

console.log(solution("[](){}"));
console.log(solution("}]()[{"));
console.log(solution("[)(]"));
console.log(solution("}}}"));