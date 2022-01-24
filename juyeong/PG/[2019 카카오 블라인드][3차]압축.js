function solution(msg) {
    const dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const idxnum = [];
    while(msg.length !== 0){        // 현재 입력이 모두 제거될 때까지 반복
        let w = "";
        for(let i=1; i<=msg.length; i++){
            const c = msg.substring(0, i);
            if(!dictionary.includes(c)){        //사전에 존재하지 않을 경우 추가
                dictionary.push(c);
                break;
            }
            w = c;  // 사전에 존재하면 현재 입력으로 인정
        }
        idxnum.push(dictionary.indexOf(w)+1);
        msg = msg.substr(w.length);
    }
    return idxnum;
}