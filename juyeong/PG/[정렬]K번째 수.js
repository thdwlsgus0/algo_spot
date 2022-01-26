function solution(array, commands) {
    var answer = [];
    var temp = [];
    for(var i=0; i<commands.length; i++){
        temp = array.slice(commands[i][0]-1,commands[i][1]);
        temp.sort((a,b)=>a-b);      //compare function이 정의 되지 않으면 1,2,100 => 1,100,2로 정렬되므로 정렬순서를 정의해주어야한다.
        answer.push(temp[commands[i][2]-1]);
    }
    return answer;
}