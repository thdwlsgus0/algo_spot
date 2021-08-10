/*
   풀이: dfs 풀이 
*/
function solution(numbers, target) {
    let answer = 0;
    dfs(numbers, 0, 0, target);
    return answer;
    
    function dfs (numbers, sum, next, target)  {
        if(next === numbers.length) {
            if(target === sum) {
                answer++;
            }
            return;
        }
        dfs(numbers, sum - numbers[next], next+1, target);
        dfs(numbers, sum + numbers[next], next+1, target);
    }
}