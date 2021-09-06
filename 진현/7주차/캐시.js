function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    const newCities = cities.map((v) => v.toLowerCase());
    for(let i = 0; i < newCities.length; i++) {
        // 캐시미스일 경우
        if(!cache.includes(newCities[i])) {
            cache.push(newCities[i]);
            
            // 캐시에 가득찬 경우
            if(cache.length > cacheSize) {
                cache.shift();
            }
            
            answer += 5;
        }
        
        // 캐시 히트일 경우
        else if(cache.includes(newCities[i])) {
            cache.splice(cache.indexOf(newCities[i]), 1);
            cache.push(newCities[i]);
            answer += 1;
        }
    }
    if(cacheSize === 0) answer = newCities.length * 5;
    return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]));
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
