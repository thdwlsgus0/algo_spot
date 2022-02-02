function solution(numbers, hand) {
    var answer = '';
    let left_location='*';
    let right_location='#';
    let left_minus;
    let right_minus;

    const keys = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2]
    };

    for(let num of numbers){
        if((num===1)||(num===4)||(num===7)){
            left_location=num;
            answer=answer.concat("L");
        }
        else if((num===3)||(num===6)||(num===9)){
             right_location=num;
             answer=answer.concat("R");
        }
        else{
          left_minus=Math.abs(keys[num][0]-keys[left_location][0])+Math.abs(keys[num][1]-keys[left_location][1]);
          right_minus=Math.abs(keys[num][0]-keys[right_location][0])+Math.abs(keys[num][1]-keys[right_location][1]);

            if(right_minus>left_minus){
               left_location=num;
                answer=answer.concat("L");
           }

           else if(right_minus===left_minus){
             if(hand==="right"){
               right_location=num;
              answer=answer.concat("R");
             }
             else if(hand==="left"){
               left_location=num;
                answer=answer.concat("L");}
           }
            else{
            right_location=num;
            answer=answer.concat("R");
            }

    }
    }
    return answer;
}
