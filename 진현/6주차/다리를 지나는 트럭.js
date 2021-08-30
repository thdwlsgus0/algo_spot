function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridgeArray = Array(bridge_length).fill(0);
    
    while(bridgeArray.length > 0) {
        time++;
        bridgeArray.shift();
        
        if(truck_weights.length > 0) {
            let sum = bridgeArray.reduce((acc, cur) => {
                return acc + cur; 
            },0);

            if( sum + truck_weights[0] <= weight) {
                bridgeArray.push(truck_weights.shift());
            }else{
                bridgeArray.push(0);
            }
        }
        
    }
    return time;
}

console.log(solution(2, 10, [7,4,5,6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10]));