function solution(p){
    let answer="";
    let num_left=0;
    let num_right=0;
    let check=false;
    
    if(p.length===0) return "";
    
    for(let i=0; i<p.length; i++){
        if(p[i]==='(')  num_left++;
        
        else if(p[i]===')')  num_right++;        
        
        if(num_left<num_right)  check=true;
        

            if(num_left===num_right){
                        if(check===true){
                        answer+='(';
                        answer+=solution(p.slice(i+1,p.length));
                        answer+=')';

                        for(let j=1; j<i; j++) (p[j]==='(')?answer+=')':answer+='(';                
                         return answer;   
                       }
                
                       else { 
                             answer += p.slice(0, i + 1); 
                             return answer += solution(p.slice(i+1, p.length));
                          
			}
            }
}
}