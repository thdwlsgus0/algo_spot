// 처음 작성한 코드 - 정확성: 76.9
function solution(n, lost, reserve) {
    let count = 0;
    let lost2 = [...lost];
    let re2 = [...reserve];
    lost.sort();
    re2.sort();
    // console.log(lost2, re2);
     for(let i=0; i<n; i++){
         if(!re2.includes(i+1) && !lost2.includes(i+1)){
            count++;
        }
     }
    console.log(count);
    count += re2.length;
    for(let i=0; i<n; i++){   
        if(re2.includes(lost2[i])){
            re2.splice(re2.indexOf(lost2[i]),1);
            lost2.splice(i,1);
            i--;
        }
    }
    console.log(count);
    if(count === n)
        return n;
    console.log(re2);
    lost2.forEach((x)=>{
        console.log(re2.includes(x+1));
        if(re2.includes(x-1)){
            re2.slice(re2.indexOf(x-1),1);
            count++;
            return false;
        }
        if(re2.includes(x+1)){
            re2.splice(re2.indexOf(x+1),1);
            count++;
            return false;
        }       
    })
    return count;
}
// 테스트 케이스 2,3,4 통과 X

// 수정한 코드