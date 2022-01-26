function solution(n, words) {
    const wordSet = new Set();
    const personMap = new Map();
    let lastAlphabet = words[0][0];
    let wordSetSize = 0;
    for(let i=1; i<=n; i++)
        personMap.set(i, 0);
    
    for(let i=0; i<words.length; i++){
        const str = words[i];
        const idx = (i % n) + 1;
        wordSet.add(str);
        personMap.set(idx, personMap.get(idx)+1);
        
        if(str[0] !== lastAlphabet || wordSet.size === wordSetSize)
            return [idx, personMap.get(idx)];
        
        lastAlphabet = str[str.length-1];
        wordSetSize = wordSet.size;
    }
    return [0, 0];
}

// 다른사람 풀이
function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "")

    return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0,0];
}
