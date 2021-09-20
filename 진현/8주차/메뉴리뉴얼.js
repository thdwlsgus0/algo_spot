const getCombination = (arr, selectNumber) => {
    const result = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, selectNumber - 1);
        const attached = combinations.map((el) => [fixed, ...el]);
        result.push(...attached);
    });
    
    return result;
}

function solution(orders, course) {
    let answer = []; 
    
    for(let i = 0; i < course.length; i++) {
        let maxValue = 0;
        const orderMap = new Map();

        for(let j = 0; j < orders.length; j++) {
            getCombination(orders[j].split(''), course[i]).map((v) => {
                const order = v.sort().join('');
                if(orderMap.has(order)) {
                    orderMap.set(order, orderMap.get(order) + 1);
                }else {
                    orderMap.set(order, 1);
                }
                maxValue = Math.max(maxValue, orderMap.get(order));
            })
        }
        
        for(let [key, value] of orderMap) {
            if(maxValue > 1 && value === maxValue) {
                answer.push(key);
            }
        }
    }
    return answer.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4]));
console.log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5]));
console.log(solution(["XYZ", "XWY", "WXA"], [2,3,4]));
