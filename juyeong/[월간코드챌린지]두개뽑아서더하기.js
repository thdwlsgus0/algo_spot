function solution(numbers) {
    let result = []
    
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i != j){
                result.push(numbers[i]+numbers[j]);
            }
        }
    }
    result.sort((a,b)=>{
      return a-b  
    });
    const answer = [...new Set(result)];    //중복제거
    return answer;
}