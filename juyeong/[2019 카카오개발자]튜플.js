function solution(s) {
    const sarr = s.replace('{{', '').replace('}}','').split('},{').sort((a,b)=>{return a.length-b.length});
    const s_set = new Set();
    for(const o of sarr){
        for(const num of o.split(','))
            s_set.add(+num);
    }
    return Array.from(s_set);
}