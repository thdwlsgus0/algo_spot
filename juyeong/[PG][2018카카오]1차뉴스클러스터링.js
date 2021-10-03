const check = (str) => {
    const reg = /^[a-zA-Z]*$/;
    return str.filter(val=>reg.test(val));
};
const multiSet = (str) => {
    const new_str = str.split('').map((val, idx, str)=>val.concat(str[idx+1])).slice(0, str.length-1);
    return check(new_str);
};
function solution(str1, str2) {
    const set1 = multiSet(str1.toLowerCase());
    const set2 = multiSet(str2.toLowerCase());
    let intersection = 0;
    set1.forEach((val) => {
        const matchIdx = set2.indexOf(val);
        if (matchIdx >= 0) {
            intersection++;
            set2.splice(matchIdx, 1);
        }
    });
    return set2.length !== 0 ? Math.floor((intersection / (set1.length + set2.length)) * 65536) : 65536;
}