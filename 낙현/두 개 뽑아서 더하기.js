function solution(numbers) {
    var answer = [];
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
        sum=numbers[i]+numbers[j];
        if(!answer.includes(sum)){
            answer.push(sum);
        }
        }
    }
    return answer.sort((a,b)=>a-b);
}