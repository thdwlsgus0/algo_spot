function solution(cacheSize, cities) {
    let  answer = 0;
    let cache=Array(cacheSize).fill(0);
    if(cacheSize===0){answer=(cities.length)*5;}
    else{
    for(let city of cities){
        city=city.toLowerCase();
        if(cache.includes(city)){
            cache.splice(cache.indexOf(city),1);
            cache.push(city);
            answer+=1;
        }
        else{  
          if(cache[cacheSize]===0){
          cache.push(city);
          answer+=5;
          }
          else{
          cache.shift();  
          cache.push(city);
          answer+=5;
           }
        }
     }
    }
    return answer;
}