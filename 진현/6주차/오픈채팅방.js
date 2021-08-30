function solution(record) {
    let answer = [];
    let result = [];
    const hashMap = new Map();
    for(let i = 0; i < record.length; i++){
      const [instruction, id, name] = record[i].split(' ');
      
      if(instruction === "Leave") {
          result.push([id, '님이 나갔습니다.']);
          continue;
      }
        
      if(instruction === "Enter") {
          result.push([id, '님이 들어왔습니다.']);
      }
      
        hashMap.set(id, name);
    }

    for(let i = 0; i < result.length; i++) {
        answer.push(`${hashMap.get(result[i][0])}${result[i][1]}`);
    }
    return answer;
}