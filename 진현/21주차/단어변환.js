let totalCnt = Infinity;

const checkStr = (str1, str2) => {
    let checkCnt = 0;

    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== str2[i]) checkCnt++;
    }

    return checkCnt > 1 ? false : true;
}

const dfs = (words, word, target, cnt) => {
    if(word === target) {
        totalCnt = Math.min(totalCnt, cnt);
        return;
    }

    for(let i = 0; i < words.length; i++) {
        if(checkStr(words[i], word)) {
            let temp = words.slice();
            temp.splice(i, 1);
            dfs(temp, words[i], target, cnt+1);
        }
    }
}

function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    dfs(words, begin, target, 0);
    return totalCnt > 50? 0: totalCnt;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
