function solution(numbers, target) {
    let answer = 0;
    
    dfs(0, 0);
    
    function dfs(index, sum) {
        if(index === numbers.length) {  // 인덱스가 배열의 끝에 다다르면
            if (sum === target) {       // 총합이 target과 같아질 경우
                answer++;               // 방법의 수 증가
             }
            return;
        }
        
        dfs(index + 1, sum - numbers[index]);   // 인덱스를 하나씩 증가시키면서, 현재 총합에 해당 인덱스의 숫자를 뺀 총합
        dfs(index + 1, sum + numbers[index]);   // 현재 총합에 해당 인덱스의 숫자를 더한 총합
    }
    
    return answer;
}