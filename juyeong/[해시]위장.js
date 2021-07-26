// 처음 작성한 코드 - 정확성: 78.6
function solution(clothes) {
    var answer = 1;
    var index = 0;
    var count = 0;
    if(clothes.length===1){ // 하나의 의상만 있는 경우
        return answer;
    }
    for(var i=0; i<clothes.length; i++){
        index = 0;
        if(clothes[i][2]!=1){ //1로 해당 의상 종류는 체크했음을 나타내줌
            for(var j=i+1; j<clothes.length; j++){
                if (clothes[i][1].includes(clothes[j][1])){
                    index++;
                    clothes[j].push(1); //끝에 1 붙여줌
                }
            }
            if((index+1)===clothes.length){ //모두 같은 의상종류일 경우
                return index+1;
            }
            answer *= index+2; //각 하나씩 선택하는 경우와 아무것도 선택 안하는 경우 포함해서 2를 더함
            count++;
        }
    }
    return answer-1; //아무것도 안입는 경우 뺌
}

// 수정한 코드
function solution(clothes) {
    var answer = 1;
    var len = clothes.length;

    var obj = new Object();
    for(var i=0; i<len; i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1; //해당 의상종류가 객체에 있다면 키값을 불러와서 1을 더해주고 없으면 1대입
    }
    for(var key in obj){ //객체를 하나씩 불러와서
        answer *= obj[key]; //개수를 곱해줌
    }
    return answer-1; //아무것도 안입는 경우 뺌
}