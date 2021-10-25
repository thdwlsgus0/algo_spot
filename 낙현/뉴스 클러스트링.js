function solution(str1, str2) {
    let answer = 0;
    let str1_array=[];
    let str2_array=[];
    let sum_array=0;
    let same_array=[];
    let array= /[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]/gi;
    let num1_same=0;
    let num2_same=0;
    let bool_same=0;
    let answer_sum=0;
    let answer_same=0;
    
    str1=str1.match(array).join('');
    str2=str2.match(array).join('');
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    
    for(let i=0; i<str1.length-1; i++){
        str1_array.push(str1[i]+str1[i+1]);    
        str2_array.push(str2[i]+str2[i+1]);
    }
     sum_array=str1_array.length+str2_array.length;
     str1_array=str1_array.sort();  
     str2_array=str2_array.sort();  
     
    for(let num1 of str1_array){
           if(bool_same===num1)continue;
            num1_same=0;
            num2_same=0;
           for(let num1_s of str1_array){
               if(num1===num1_s) num1_same++;   
            }
           
            for(let num2_s of str2_array){
                if(num1===num2_s) {
                    num2_same++;
                    (num1_same>num2_same)?same_array.push(num2_s):same_array.push(num1);
                }
            }
             bool_same=num1;          
    }
     answer_same=same_array.length;
     answer_sum=sum_array-same_array.length;
    
    answer=(answer_same/answer_sum)*65536;
  
    return answer;
}