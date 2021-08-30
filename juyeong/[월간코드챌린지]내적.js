function solution(a, b) {
    return a.reduce((accumulator, currentValue, index)=>accumulator+(currentValue*b[index]),0)
}