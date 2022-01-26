function solution(people, limit) {
    let num = 0;
    let start = 0;
    let last = people.length-1;
    people.sort((a,b) => b-a);
    
    while(start <= last){
        if(people[start] + people[last] <= limit)
            last--;
        start++;
        num++;
    }
    return num;
}