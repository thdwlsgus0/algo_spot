function solution(s) {
    let zeroCount = 0;
    let step = 0;
    while(true) {
        const zeroArray = s.split('').filter(v => v === "0");
        const oneArray = s.split('').filter(v => v === "1");
        if(zeroArray.length === 0 && oneArray.length === 1) break;
        zeroCount += zeroArray.length;
        step++;
        s = oneArray.length.toString(2);
    }
    return [step, zeroCount];
}

function solution2(s) {
    let zeroCount = 0;
    let step = 0;
    while(s.length > 1) {
        const zeroArray = s.match(/0/g) || [];
        zeroCount += zeroArray.length;
        step++;
        s = s.replace(/0/g, '').length.toString(2);   
    } 
    
    return [step, zeroCount];
}