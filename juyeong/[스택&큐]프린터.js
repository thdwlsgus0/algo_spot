function solution(priorities, location) {
    let count = 0;
    
    while(priorities.length > 0){      
        if(priorities[0] != Math.max(...priorities))    // 첫번째 값이 배열의 최대값이 아닐 경우
            priorities.push(priorities.shift());        // 앞의 거를 뒤로 옮김
        else{           // 프린트 하는 경우
            count++;    // 몇 번째로 프린트 되는지
            if(location === 0)
                return count;
            priorities.shift();
        }
        
        if(location != 0)
            location--;
        else
            location = priorities.length-1;     // 프린트 안됐고, 처음 위치니까 끝으로 보낸다
    }
}