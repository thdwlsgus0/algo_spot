function solution(s) {
    let BTcnt = 0;
    let zerocnt = 0;
    while(s !== '1'){
        const slen = s.length;
        s = s.split('').filter(n => n==1);
        zerocnt += (slen - s.length);
        s = s.length.toString(2);
        BTcnt++;
    }
    return [BTcnt, zerocnt];
}