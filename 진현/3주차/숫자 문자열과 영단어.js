/*
 풀이 1 : 정규식을 이용한 간단 풀이
*/

function solution(s) {
    const str = s.replace(/zero/g, '0')
                 .replace(/one/g, '1')
                 .replace(/two/g, '2')
                 .replace(/three/g, '3')
                 .replace(/four/g, '4')
                 .replace(/five/g, '5')
                 .replace(/six/g, '6')
                 .replace(/seven/g, '7')
                 .replace(/eight/g, '8')
                 .replace(/nine/g, '9')
    return +str;
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("123"));


/*
  풀이 2 : Object.entries를 이용해서 객체 순회
*/

function solution1(s) {
    
    const numberArray = {
        'zero' : 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    
    for(let [key, value] of Object.entries(numberArray)) {
        let re = new RegExp(`${key}`,"g");
        s = s.replace(re, value);
    }
    
    return +s;
}

console.log(solution1("one4seveneight"));
console.log(solution1("23four5six7"));
console.log(solution1("2three45sixseven"));
console.log(solution1("123"));