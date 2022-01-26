// 처음 작성한 코드 - 정확성: 72.7
function solution(name) {
    var answer = 0;
    var obj = new Array()
         // 0    1   2    3   4    5   6    7   8    9  10   11  12   13
    obj = ['A', 'B','C', 'D','E', 'F','G', 'H','I', 'J','K', 'L','M', 'N', //M =13 N=14번째
          'O', 'P','Q', 'R','S', 'T','U', 'V','W', 'X','Y', 'Z']
        //14   15  16   17   18   19  20   21  22   23  24   25
    if(name.indexOf('A')*2 < name.length){ // A가 전체길이의 반보다 아래에 있을 경우 그 전까지만 돌리고 뒤로 돌아감
         for(var i=0; i<name.indexOf('A'); i++){
             if(name.charAt(i) > obj[obj.length/2-1]){  //M보다 클 경우
                answer += (obj.length - obj.indexOf(name.charAt(i)))        
            }
            else{
                answer += obj.indexOf(name.charAt(i))
            }
            answer++
        }
        for(var i=name.length-1; i>name.indexOf('A'); i--){
            if(name.charAt(i) > obj[obj.length/2-1]){  //M보다 클 경우
                answer += (obj.length - obj.indexOf(name.charAt(i)))        
            }
            else{
                answer += obj.indexOf(name.charAt(i))
            }
            answer++
        }
    }
    else{
        for(var i=0; i<name.length; i++){
            if(i+1<name.length && name.charAt(i+1) === 'A'){
                answer++
                continue
            }
            else if(name.charAt(i) > obj[obj.length/2-1]){  //M보다 클 경우
                answer += (obj.length - obj.indexOf(name.charAt(i)))        
            }
            else{
                answer += obj.indexOf(name.charAt(i))
            }
            answer++
        }
    }
    return answer-1;
}

// 수정한 코드
