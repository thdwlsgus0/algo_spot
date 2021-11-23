function solution(number, k) {
    let answer = '';
    const stack = [];
    number.split('').forEach((value, index, array) => {
        
        while(k > 0 && stack[stack.length-1] < value) {
            stack.pop();
            k--;
        }
        
        stack.push(value);
    });
    
    if(k > 0) {
        stack.splice(stack.length-k, k);
    }
    return stack.join('');
}