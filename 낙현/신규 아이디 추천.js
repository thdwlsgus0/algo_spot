function solution(new_id) {
    var answer = '';
    let sample =[];
    //1단계
    new_id=new_id.toLowerCase();
    //2단계
    for(let i=0; i<new_id.length; i++){
        if(((new_id.charCodeAt(i)>96)&&(new_id.charCodeAt(i)<123))||(new_id.charCodeAt(i)==45)||(new_id.charCodeAt(i)==95)||(new_id.charCodeAt(i)==46)||(Number(new_id[i])<10)){
           sample.push(new_id[i]);
        }
    }
           
    
    
    //3단계
    for(let j=0; j<16; j++){
    for(let i=0; i<sample.length; i++){
        if((sample[i]=='.')&&(sample [i+1]=='.')){
            sample.splice(i,1);
        }
    }
    //4단계
    for(let i=0; i<16; i++){
    if(sample[0]=='.'){
        sample.splice(0,1);
    }
     if(sample[sample.length]=='.'){
        sample.splice(sample.length+1,1);
    }
    }
    //5단계
    
    if(sample.length<1)sample.push("a");
    //6단계
    if(sample.length>=16) sample =sample.slice(0,15);
    
    if(sample[sample .length-1]=='.'){
        sample .splice(sample .length-1,1);
    }
    //7단계
    if(sample.length<3)sample.push(sample[sample.length-1]);
    }
    answer=sample.join('');
    
    return answer;
}