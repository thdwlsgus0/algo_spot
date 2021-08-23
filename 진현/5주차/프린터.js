function solution(priorities, location) {
    let answer = 1;
    
    const objArray = priorities.reduce((acc, cur, index) => {
        const obj = {};
        obj['location'] = index; 
        obj['priority'] = cur;
        acc.push(obj);
        return acc;
    },[]);
    
   
    while(objArray.length > 0) {
        const next = objArray.shift();
        
        if (objArray.some((value, index) => value.priority > next.priority )) {
            objArray.push(next);
        }
        
        else {
            if(location === next.location) {
                break;
            }
            answer++;
        }
        
    }
    
    return answer;
}