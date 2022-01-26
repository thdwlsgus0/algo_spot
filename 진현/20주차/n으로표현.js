function solution(N, number) {
  let answer = -1;
  const setArray = new Array(8).fill().map(() => new Set());

  for(let i = 0; i < 8; i++) {
      setArray[i].add(parseInt(N.toString().repeat(i+1)));

      for(let j = 0; j < i; j++) {
          for(let param1 of setArray[j]) {
              for(let param2 of setArray[i - j - 1]) {
                  setArray[i].add(param1 + param2);
                  setArray[i].add(param1 - param2);
                  setArray[i].add(param1 * param2);
                  setArray[i].add(param1 / param2);
              }
          }
      }

      if(setArray[i].has(number)) return i+1;
  }

  return answer;
}
