function solution(n, arr1, arr2) {
    let answer = [];
    for(let index = 0; index < arr1.length; index++) {
        let smallStr = '';
        const password = ((arr1[index] | arr2[index]).toString(2)).split('').map((v,i)=> {
           return v === '1'? '#': ' ';  
        }).join('');
        
        if(password.length !== n) {
            smallStr = " ".repeat(n-password.length);
        }
        answer.push(smallStr+ password);
    }
    
    return answer;
}


function solution1(n, arr1, arr2) {
    return arr1.map((v,i)=> (v|arr2[i]).toString(2).padStart(n,0).replace(/0/g, ' ').replace(/1/g, '#'));
}