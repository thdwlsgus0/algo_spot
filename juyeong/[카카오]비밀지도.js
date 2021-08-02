function solution(n, arr1, arr2) {
    let answer = [];   
    for(let i=0; i<n; i++){
        answer.push('');
    }
    let s1 = arr1.map(function(x){return zero(x.toString(2),n);})
    let s2 = arr2.map(function(x){return zero(x.toString(2),n);})
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(s1[i].charAt(j) == 0 && s2[i].charAt(j) == 0){
                answer[i] += ' ';
            }
            else{
                answer[i] += '#';
            }           
        }        
    }    
    return answer;
}

function zero(x, n) {
	x = x + '';
	return x.length >= n ? x : new Array(n - x.length + 1).join('0') + x;
}