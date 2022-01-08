const isDuplicated = (value, minimum) => {
    for(let i = 0; i < minimum.length; i++) {
        if((minimum[i] & value) === minimum[i]) return false;
    }
    minimum.push(value);
    return true;
}

const getSet = (rowSize, colSize, relation, index) => {
    let relationSet = new Set();
    for(let j = 0; j < rowSize; j++) {
       let arr = [];
       for(let k = 0; k < colSize; k++) {
           const checkUniqueValue = index & 1 << k;
           if(checkUniqueValue) arr.push(relation[j][k]);
       }
       relationSet.add(arr.join(''));
    }
    return relationSet;
} 

function solution(relation) {
    let answer = 0;
    const rowSize = relation.length;
    const colSize = relation[0].length;
    const minimum = [];
    const bitSize = 1 << colSize; 
    
    for(let i = 1; i < bitSize; i++) {
        const relationSet = getSet(rowSize, colSize, relation, i);
        if(relationSet.size === rowSize && isDuplicated(i, minimum)) answer++;
    }
    
    return answer;
}