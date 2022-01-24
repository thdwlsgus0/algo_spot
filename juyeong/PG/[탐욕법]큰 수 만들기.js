function solution(number, k) {
    const stack = [];
    for (let i = 0; i<number.length; i++) {
        while (stack[stack.length - 1] < number[i] && k>0) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    stack.splice(stack.length-k, k);
    return stack.join('');
}