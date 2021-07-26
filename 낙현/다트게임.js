function solution(dartResult) {
    var answer = 0; //출력값
    let sample; //기회마다 맞춘 점수
    let cnt=0; //score의 인덱스구분을 위한 변수
    let stauts=0; // "S,D,T"를 맞췄을때라는 상황을 위한 변수
    let score =new Array(); //각 기회의 점수를 저장하는 배열

    for(let i=0; i<3; i++){
        score[i]=0;
    }

    for(let i=0; i<dartResult.length; i++){

    if(dartResult[i]=="S"){
        if((dartResult[i-1]=="0")&&(dartResult[i-2]=="1")){ //10점을 구분하기 위함
            sample=10;
            stauts=1;
        }
        else{
            sample=parseInt(dartResult[i-1]);
            stauts=1;
            }
            }
        else if(dartResult[i]=="D"){
            if((dartResult[i-1]=="0")&&(dartResult[i-2]=="1")){  //10점을 구분하기 위함
            sample=100;
            stauts=1;
            }
            else{
            sample=parseInt(dartResult[i-1]**2);
            stauts=1;
            }
        }
        else if(dartResult[i]=="T"){
        if((dartResult[i-1]=="0")&&(dartResult[i-2]=="1")){ //10점을 구분하기 위함
        sample=1000;
        stauts=1;
        }
        else{
        sample=parseInt(dartResult[i-1]**3);
        stauts=1;
        }
        }

    if(dartResult[i+1]=="*"){
        if(cnt==0){
            sample=sample*2;
            score[cnt]=sample;
            cnt++;
            stauts=0;
        }
        else{
            sample=sample*2;
            score[cnt-1]=score[cnt-1]*2;
            score[cnt]=sample;
            cnt++;
            stauts=0;
        }
    }

    else if(dartResult[i+1]=="#"){
       sample=sample*(-1);
       score[cnt]=sample;
       cnt++;
        stauts=0;
    }
    else{
     if(stauts==1){
     score[cnt]=sample;
     cnt++;
     stauts=0;
     }
     else{
         continue;
     }
    }
    }

    for(let i=0; i<3; i++){
        answer+=score[i];
    }


    return answer;
}
