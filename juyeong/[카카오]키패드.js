function solution(numbers, hand) {
    let answer = [];
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 3 === 1){       // 1,4,7
            answer.push('L');
        }
        else if(numbers[i] % 3 === 0){   //3,6,9
            answer.push('R');
        }
        else{                           // 2,5,8,0
            let rindex = answer.lastIndexOf('R');
            let lindex = answer.lastIndexOf('L');
            
            let rlen = Math.abs(numbers[rindex] - (numbers[i]%3));
            let llen = Math.abs(numbers[lindex] - (numbers[i]%3));
            
            if(rlen === llen){   // 거리가 같은지 비교
                if(hand === "right")
                     answer.push('R');
                else
                     answer.push('L');
            }
            else if(rlen > llen)    //왼손이 더 가까울 경우
                answer.push('L');
            else
                answer.push('R');        
        }
        
    }
    return answer.join('');
}