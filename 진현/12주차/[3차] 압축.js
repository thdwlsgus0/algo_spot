const getDictionary = (str) => {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').reduce((dict, cur, index) => {
        dict[index+1] = cur;
        return dict;
    }, {});
}

const addStr = (msg, map, answer) => {
    let str = msg[0];

    for(let index = 0; index < msg.length; index++) {
        if(!map.get(str + msg[index+1])) {
            map.set(str + msg[index+1], map.size + 1);
            answer.push(map.get(str));
            str = msg[index+1];
        }
        
        else {
            str += msg[index+1];    
        }
    }
    
    return answer;
}

function solution(msg) {
    let answer = [];
    const dict = getDictionary(msg);
    const map = new Map();
    
    for(let index = 1; index <= 26; index++) {
        map.set(dict[index], index);    
    }    
    
    return addStr(msg, map, answer);
}