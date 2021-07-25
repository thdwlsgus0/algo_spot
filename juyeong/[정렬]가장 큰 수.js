// 처음 작성한 코드 - 실패
function solution(numbers) {
    var answer = [];
    var arr = [];
    var str = "0000"
    var data = [];
    var num;
    for(var i=0; i<numbers.length; i++){
        arr.push(String(numbers[i])+str);        
    }
    arr.forEach(function(item){
            data.push(item.slice(0,5));
    });
    data.sort((a,b)=>{return b-a;});
    data.forEach(function(item){
            num = item/10000;
            answer.push(num);
    });
    return answer.join('');
}

//수정한 코드
function solution(numbers) {
    var answer = numbers.map(c=> c + '').sort((a,b) => (b+a) - (a+b)).join('');
    return answer[0]==='0'? '0' : answer;
}