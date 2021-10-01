const addUnion = (A, B) => {
    A.sort((a,b) => a-b);
    B.sort((a,b) => a-b);
    let union = [];
    let intersection = [];
    
    for(let i = 0; i < B.length; i++) {
        
        if(A.indexOf(B[i]) >= 0 && B[i].match(/^[A-Z]+$/)) {
            intersection.push(A.splice(A.indexOf(B[i]), 1));
        }
        
        if(B[i].match(/^[A-Z]+$/)){
            union.push(B[i]);
        }
    }

    for(let i = 0; i< A.length; i++) {
        if(A[i].match(/^[A-Z]+$/)){
            union.push(A[i]);
        }
    }
    return [union.length, intersection.length];
}

function solution(str1, str2) {
    let answer = 0;
    let A = [];
    let B = [];
    str1 = str1.split('').map(v => v.toUpperCase()).join('');
    str2 = str2.split('').map(v => v.toUpperCase()).join('');
    
    for(let i = 0; i < str1.length-1; i++) {
        A.push(str1.slice(i, i+2));
    }
    
    for(let i = 0; i < str2.length-1; i++) {
        B.push(str2.slice(i, i+2));
    }
    
    const [addValue, subValue] = addUnion(A, B);
    console.log(addValue, subValue);
    return (subValue === 0 && addValue === 0) ? 65536: Math.floor(subValue/addValue * 65536);
}