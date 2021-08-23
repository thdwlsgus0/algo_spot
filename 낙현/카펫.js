function solution(brown, yellow) {
    var answer = [];
    let width; //가로
    let height; //세로
    let sum=brown+yellow;
    
      for(let i=3; i<=sum; i++){
          if((sum%i)==0){
              width=sum/i;
              height=i;
              if(brown==(width*2+height*2-4)){
                  answer.push(width);
                  answer.push(height);
                  break;
              }
          }
      }
    
    return answer;
}