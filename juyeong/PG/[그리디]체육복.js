function solution(n, lost, reserve) {
    let count = 0;

    const new_reserve = reserve.filter(x=> !lost.includes(x)).sort()  //빌려줄 수 있는 애들만
    const new_lost = lost.filter(x=> !reserve.includes(x)).sort()   //본인꺼 분실 -> 여벌의 옷 하나만 가지고 있는 애들

    const delete_value = (reserve, lost, reserve_value, lost_value) => {    //수업 참여 가능한 애들 제거
        reserve.splice(reserve_value,1)
        lost.splice(lost_value,1)
    }

        for(let i=0; i<new_lost.length; i++){
            if(new_reserve.includes(new_lost[i]-1)){    //앞번호 사람이 빌려줄 수 있는 경우
                delete_value(new_reserve,new_lost, new_reserve.indexOf(new_lost[i]-1), new_lost.indexOf(new_lost[i]))
                i--;
            }
            else if(new_reserve.includes(new_lost[i]+1)){   //뒷번호 사람이 빌려줄 수 있는 경우
                delete_value(new_reserve, new_lost, new_reserve.indexOf(new_lost[i]+1), new_lost.indexOf(new_lost[i]))
                i--;
            }
            else
                count++ //참여하지 못하는 학생의 수
        }

    return n-count; //전체 학생에서 수업에 참여하지 못하는 학생 뺌
}