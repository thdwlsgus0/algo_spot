function solution(n, words) {
    let answer = [0, 0];
    const wordSet = new Set();
    wordSet.add(words[0]);
    
    for(let i = 1; i < words.length; i++) {
        const beforeWord = words[i-1];
        const afterWord = words[i];
        
        if(beforeWord[beforeWord.length-1] !== afterWord[0] || wordSet.has(afterWord)) {
            const number = i % n + 1;
            answer = [number,  parseInt(i / n) + 1];
            break;
        }else {
            wordSet.add(words[i]);
        }
    }
     
    return answer;
}