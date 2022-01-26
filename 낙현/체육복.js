function solution(n, lost, reserve) {
    var answer = 0;
    let student=[];
    for(let index=1; index<=n; index++){
     student[index]=1;
    }
    reserve.forEach(num=>student[num]++);
    lost.forEach(number=>student[number]--);

    for(let k=1; k<=n; k++){
        if(student[k]===0){
            if(student[k-1]===2) {
                student[k-1]--;
                student[k]++;
            }
            else if(student[k+1]===2){
                student[k+1]--;
                student[k]++;
            }
        }
    }

    let result=student.filter(item=>item>0);
    answer=result.length;
    return answer;
}
