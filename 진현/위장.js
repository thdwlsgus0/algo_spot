/*
  풀이 1 
  map을 이용해서 문제 풀기 
*/
function solution(clothes) {
    const clothMap = new Map();
    let result = 1; 
    for(let index = 0; index < clothes.length; index++) {
        if(clothMap.has(clothes[index][1])) clothMap.set(clothes[index][1], clothMap.get(clothes[index][1])+1);
        else clothMap.set(clothes[index][1], 1);
    }
    for(let value of clothMap.values()){
        result *= (value+1);
    }
    return result - 1;
}

/*
  풀이 2 
  열거 가능한 속성으로 변환한 후 reduce를 이용해서 연산하기
*/
function solution2(clothes) {
    return Object.values(clothes.reduce((acc, cur) => {
        acc[cur[1]] = acc[cur[1]]? acc[cur[1]]+1: 1;
        return acc;
    }, {})).reduce((sum, value)=> sum * (value+1),1)-1;
}


const clothes1 = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
const clothes2 = [["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(clothes1));
console.log(solution(clothes2));

console.log(solution2(clothes1));
console.log(solution2(clothes2));

console.log(solution3(clothes1));
console.log(solution3(clothes2));