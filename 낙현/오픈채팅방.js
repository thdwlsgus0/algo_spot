let map = new Map();
let answer= [];

function split(record){
    for(let text of record){
     let uid=text.split(' ');
     if((/[EC]/g).test(uid[0])) map.set(uid[1],uid[2]);
  }
}

function print(record){
    for(let text of record){
     let uid=text.split(' ');
          if((/E/g).test(uid[0]))
            answer.push(`${map.get(uid[1])}님이 들어왔습니다.`);
        
         if((/L/g).test(uid[0]))
              answer.push(`${map.get(uid[1])}님이 나갔습니다.`);
  }
}


function solution(record) {

 split(record);
 print(record);

    return answer;
}