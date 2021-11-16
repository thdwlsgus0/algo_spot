function solution(s){
    const stack = [];
    s.split('').forEach((value, index, array) => {
         if(value === '(') stack.push(value);
         else if(value === ')' && stack[stack.length-1] === '(') stack.pop();
         else stack.push(value);
    });

    return stack.length === 0? true : false;
}