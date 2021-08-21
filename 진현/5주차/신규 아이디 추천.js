/* if문  */
function solution(new_id) {
    // 1단계는 toLowerCase를 진행합니다.
    // 2단계는 match 메소드를 이용해서 소문자, 숫자, 빼기, 밑줄, 마침표만 가져옵니다.
    // 3단계는 replace {2, }
    // 4단계는 ^와 $로 해결
    let value = new_id.toLowerCase()
                 .match(/[a-z0-9-_.]/g)
                 .join('')
                 .replace(/\.{2,}/g, '.')
                 .replace(/(^\.|\.$)/g, '');
    if(value.length === 0) value = "a";
    if(value.length >= 16) value = value.split('').splice(0, 15).join('').replace(/\.$/, '');
    if(value.length <= 2) value += value[value.length-1].repeat(3- value.length);
    return value;
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("z-+.^."));
console.log(solution("=.="));
console.log(solution("123_.def"));
console.log(solution("abcdefghijklmn.p"));

/* if문 없이 작성 */ 

function solution1(new_id) {
    // 1단계는 toLowerCase를 진행합니다.
    // 2단계는 match 메소드를 이용해서 소문자, 숫자, 빼기, 밑줄, 마침표만 가져옵니다.
    // 3단계는 replace {2, }
    // 4단계는 ^와 $로 해결
    let answer = new_id.toLowerCase()
                 .match(/[a-z0-9-_.]/g)
                 .join('')
                 .replace(/\.{2,}/g, '.')
                 .replace(/(^\.|\.$)/g, '')
                 .replace(/^$/, 'a')
                 .slice(0, 15)
                 .replace(/\.$/, '');
    
    answer = answer.length <= 2? answer + answer[answer.length-1].repeat(3 - answer.length): answer;
    return answer;
}

console.log(solution1("...!@BaT#*..y.abcdefghijklm"));
console.log(solution1("z-+.^."));
console.log(solution1("=.="));
console.log(solution1("123_.def"));
console.log(solution1("abcdefghijklmn.p"));
