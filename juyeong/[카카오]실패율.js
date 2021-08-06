function solution(N, stages) {
    let answer = [];
    for(let i=1; i<=N; i++){
        let curr = 0, more=0;
        stages.forEach((num)=>{
            if(i <= num){
                more++;
            }
            if(i === num){
                curr++;
            }
        });
        answer.push({i:i, value:curr/more});
    }

    answer.sort((a,b)=>{
        if(a.value > b.value)
            return -1;
        else
            return 1;
    })

    return answer.map(x=>x.i);
}